export function renderDashboardOpenapiSection(): string {
  return `
    <section class="dashboard-panel" data-dashboard-panel="openapi">
      <section class="openapi-panel panel">
        <div>
          <p class="eyebrow">OpenAPI JSON</p>
          <h2>Machine-readable API contract</h2>
          <p>
            The OpenAPI JSON file describes every endpoint, request body, response schema,
            authentication method, and validation rule in a standard format. Developers use it
            to generate SDK clients, import the API into Postman, build typed integrations, or
            keep documentation synchronized with the backend.
          </p>
        </div>
        <div class="openapi-actions">
          <a class="button primary" href="/docs-json">View JSON</a>
          <a class="button secondary" href="/docs">Open Swagger UI</a>
        </div>
      </section>

      <section class="openapi-grid">
        <article class="panel">
          <span class="mini-label">For SDKs</span>
          <h3>Generate clients</h3>
          <p>Use <code>/docs-json</code> with OpenAPI Generator, Swagger Codegen, or similar tools to create typed clients for JavaScript, Python, Go, Java, C#, PHP, Ruby, and more.</p>
        </article>
        <article class="panel">
          <span class="mini-label">For testing</span>
          <h3>Import into tools</h3>
          <p>Import the JSON into Postman, Insomnia, or API gateways so teams can test requests without manually recreating schemas.</p>
        </article>
        <article class="panel">
          <span class="mini-label">For docs</span>
          <h3>Always synchronized</h3>
          <p>Because controllers and DTOs use Swagger decorators, the contract updates when the NestJS API changes.</p>
        </article>
      </section>
    </section>
  `;
}
