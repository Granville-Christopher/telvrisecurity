export function renderHomepageBuiltForSection(): string {
  return `
    <section class="built-for-scroll reveal-up">
      <aside class="built-for-rail" aria-label="Built for segments" data-i18n-aria="builtFor.segments">
        <p class="eyebrow" data-i18n="builtFor.eyebrow">Built for what you’re building</p>
        <button type="button" class="built-for-step active" data-built-for-step="agents" data-i18n="builtFor.agents">AI Agents</button>
        <button type="button" class="built-for-step" data-built-for-step="tools" data-i18n="builtFor.tools">AI Tools</button>
        <button type="button" class="built-for-step" data-built-for-step="b2b" data-i18n="builtFor.b2b">B2B</button>
        <button type="button" class="built-for-step" data-built-for-step="b2c" data-i18n="builtFor.b2c">B2C</button>
        <button type="button" class="built-for-step" data-built-for-step="fintech" data-i18n="builtFor.fintech">Fintech</button>
        <button type="button" class="built-for-step" data-built-for-step="banks" data-i18n="builtFor.banks">Digital Banks</button>
        <button type="button" class="built-for-step" data-built-for-step="commerce" data-i18n="builtFor.commerce">Ecommerce</button>
        <button type="button" class="built-for-step" data-built-for-step="web3" data-i18n="builtFor.web3">Crypto & Web3 Wallets</button>
      </aside>
      <div class="built-for-story">
        <article class="built-for-card media-built-agents" data-built-for-card="agents">
          <div class="built-for-copy">
            <span data-i18n="builtFor.agents">AI Agents</span>
            <h2 data-i18n="builtFor.agents.title">Secure autonomous actions before they touch real accounts.</h2>
            <p data-i18n="builtFor.agents.body">Gate agent-driven recovery, profile edits, and privileged workflows with phone-risk signals.</p>
          </div>
        </article>
        <article class="built-for-card media-built-tools" data-built-for-card="tools">
          <div class="built-for-copy">
            <span data-i18n="builtFor.tools">AI Tools</span>
            <h2 data-i18n="builtFor.tools.title">Add identity risk checks to AI-powered user journeys.</h2>
            <p data-i18n="builtFor.tools.body">Protect onboarding, verification, and support flows where automation can move faster than fraud teams.</p>
          </div>
        </article>
        <article class="built-for-card media-built-b2b" data-built-for-card="b2b">
          <div class="built-for-copy">
            <span data-i18n="builtFor.b2b">B2B</span>
            <h2 data-i18n="builtFor.b2b.title">Protect admin users, workspaces, and enterprise accounts.</h2>
            <p data-i18n="builtFor.b2b.body">Step up risky user recovery and account changes before attackers gain organizational access.</p>
          </div>
        </article>
        <article class="built-for-card media-built-b2c" data-built-for-card="b2c">
          <div class="built-for-copy">
            <span data-i18n="builtFor.b2c">B2C</span>
            <h2 data-i18n="builtFor.b2c.title">Keep consumer identity flows fast without making them fragile.</h2>
            <p data-i18n="builtFor.b2c.body">Use SIM-swap checks before password resets, device changes, and high-value profile actions.</p>
          </div>
        </article>
        <article class="built-for-card media-built-fintech" data-built-for-card="fintech">
          <div class="built-for-copy">
            <span data-i18n="builtFor.fintech">Fintech</span>
            <h2 data-i18n="builtFor.fintech.title">Stop account takeover before funds move.</h2>
            <p data-i18n="builtFor.fintech.body">Add phone-risk checks before payouts, card changes, beneficiary creation, and account recovery.</p>
          </div>
        </article>
        <article class="built-for-card media-built-banks" data-built-for-card="banks">
          <div class="built-for-copy">
            <span data-i18n="builtFor.banks">Digital Banks</span>
            <h2 data-i18n="builtFor.banks.title">Strengthen mobile-first banking security.</h2>
            <p data-i18n="builtFor.banks.body">Blend telecom intelligence into step-up authentication, fraud operations, and recovery policies.</p>
          </div>
        </article>
        <article class="built-for-card media-built-commerce" data-built-for-card="commerce">
          <div class="built-for-copy">
            <span data-i18n="builtFor.commerce">Ecommerce</span>
            <h2 data-i18n="builtFor.commerce.title">Reduce chargeback and account abuse risk.</h2>
            <p data-i18n="builtFor.commerce.body">Check phone compromise before stored payment changes, refunds, marketplace payouts, and loyalty redemptions.</p>
          </div>
        </article>
        <article class="built-for-card media-built-web3" data-built-for-card="web3">
          <div class="built-for-copy">
            <span data-i18n="builtFor.web3">Crypto & Web3 Wallets</span>
            <h2 data-i18n="builtFor.web3.title">Protect wallet recovery and withdrawal flows.</h2>
            <p data-i18n="builtFor.web3.body">Detect high-risk phone changes before seed recovery, withdrawal allowlists, and transfer approvals.</p>
          </div>
        </article>
      </div>
    </section>
  `;
}
