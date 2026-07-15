export function renderHomepageBuiltForSection(): string {
  return `
    <section class="built-for-scroll reveal-up">
      <aside class="built-for-rail" aria-label="Built for segments">
        <p class="eyebrow">Built for what you’re building</p>
        <button type="button" class="built-for-step active" data-built-for-step="agents">AI Agents</button>
        <button type="button" class="built-for-step" data-built-for-step="tools">AI Tools</button>
        <button type="button" class="built-for-step" data-built-for-step="b2b">B2B</button>
        <button type="button" class="built-for-step" data-built-for-step="b2c">B2C</button>
        <button type="button" class="built-for-step" data-built-for-step="fintech">Fintech</button>
        <button type="button" class="built-for-step" data-built-for-step="banks">Digital Banks</button>
        <button type="button" class="built-for-step" data-built-for-step="commerce">Ecommerce</button>
        <button type="button" class="built-for-step" data-built-for-step="web3">Crypto & Web3 Wallets</button>
      </aside>
      <div class="built-for-story">
        <article class="built-for-card media-built-agents" data-built-for-card="agents">
          <div class="built-for-copy">
            <span>AI Agents</span>
            <h2>Secure autonomous actions before they touch real accounts.</h2>
            <p>Gate agent-driven recovery, profile edits, and privileged workflows with phone-risk signals.</p>
          </div>
        </article>
        <article class="built-for-card media-built-tools" data-built-for-card="tools">
          <div class="built-for-copy">
            <span>AI Tools</span>
            <h2>Add identity risk checks to AI-powered user journeys.</h2>
            <p>Protect onboarding, verification, and support flows where automation can move faster than fraud teams.</p>
          </div>
        </article>
        <article class="built-for-card media-built-b2b" data-built-for-card="b2b">
          <div class="built-for-copy">
            <span>B2B</span>
            <h2>Protect admin users, workspaces, and enterprise accounts.</h2>
            <p>Step up risky user recovery and account changes before attackers gain organizational access.</p>
          </div>
        </article>
        <article class="built-for-card media-built-b2c" data-built-for-card="b2c">
          <div class="built-for-copy">
            <span>B2C</span>
            <h2>Keep consumer identity flows fast without making them fragile.</h2>
            <p>Use SIM-swap checks before password resets, device changes, and high-value profile actions.</p>
          </div>
        </article>
        <article class="built-for-card media-built-fintech" data-built-for-card="fintech">
          <div class="built-for-copy">
            <span>Fintech</span>
            <h2>Stop account takeover before funds move.</h2>
            <p>Add phone-risk checks before payouts, card changes, beneficiary creation, and account recovery.</p>
          </div>
        </article>
        <article class="built-for-card media-built-banks" data-built-for-card="banks">
          <div class="built-for-copy">
            <span>Digital Banks</span>
            <h2>Strengthen mobile-first banking security.</h2>
            <p>Blend telecom intelligence into step-up authentication, fraud operations, and recovery policies.</p>
          </div>
        </article>
        <article class="built-for-card media-built-commerce" data-built-for-card="commerce">
          <div class="built-for-copy">
            <span>Ecommerce</span>
            <h2>Reduce chargeback and account abuse risk.</h2>
            <p>Check phone compromise before stored payment changes, refunds, marketplace payouts, and loyalty redemptions.</p>
          </div>
        </article>
        <article class="built-for-card media-built-web3" data-built-for-card="web3">
          <div class="built-for-copy">
            <span>Crypto & Web3 Wallets</span>
            <h2>Protect wallet recovery and withdrawal flows.</h2>
            <p>Detect high-risk phone changes before seed recovery, withdrawal allowlists, and transfer approvals.</p>
          </div>
        </article>
      </div>
    </section>
  `;
}
