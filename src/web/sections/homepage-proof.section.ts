export function renderHomepageProofSection(): string {
  return `
    <section class="security-proof-section reveal-up">
      <div class="proof-layout">
        <div class="proof-intro section-heading">
          <p class="eyebrow">Security platform foundation</p>
          <h2>Built for teams that need proof before trust.</h2>
          <p>Telvri Security turns mobile-network intelligence into a simple decision layer for account protection, onboarding, wallet recovery, and transaction risk.</p>
        </div>
        <div class="proof-stack">
          <article class="proof-row">
            <div class="proof-row-copy">
              <span class="proof-row-label">Threat intelligence</span>
              <h3>SIM-swap risk signals</h3>
              <p>Evaluate phone-number risk before sensitive identity moments and return a clear decision for your backend.</p>
            </div>
            <figure class="proof-row-media">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
                alt="Cybersecurity network visualization"
                loading="lazy"
              />
            </figure>
          </article>
          <article class="proof-row proof-row-reverse">
            <div class="proof-row-copy">
              <span class="proof-row-label">Developer control</span>
              <h3>API-key protected access</h3>
              <p>Use live-style keys, strict request validation, Swagger contracts, and predictable JSON responses.</p>
            </div>
            <figure class="proof-row-media">
              <img
                src="https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=800&q=80"
                alt="API key authentication security"
                loading="lazy"
              />
            </figure>
          </article>
          <article class="proof-row">
            <div class="proof-row-copy">
              <span class="proof-row-label">Enterprise readiness</span>
              <h3>OpenAPI as source of truth</h3>
              <p>Use the OpenAPI contract to generate SDKs, import into gateways, and keep developer docs aligned.</p>
            </div>
            <figure class="proof-row-media">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                alt="Developer documentation and OpenAPI workflows"
                loading="lazy"
              />
            </figure>
          </article>
          <article class="proof-row proof-row-reverse">
            <div class="proof-row-copy">
              <span class="proof-row-label">Operational workflow</span>
              <h3>Step-up or block decisions</h3>
              <p>Route high-risk signals into MFA, manual review, cooldowns, or blocked recovery flows.</p>
            </div>
            <figure class="proof-row-media">
              <img
                src="https://images.unsplash.com/photo-1762340275855-ae8f4c2c144e?auto=format&fit=crop&w=800&q=80"
                alt="Mobile verification and step-up authentication"
                loading="lazy"
              />
            </figure>
          </article>
        </div>
      </div>
    </section>
  `;
}
