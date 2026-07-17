export function renderHomepageUseCasesSection(): string {
  return `
    <section class="use-case-section reveal-up">
      <div class="use-case-layout">
        <div class="use-case-intro section-heading">
          <p class="eyebrow" data-i18n="use.eyebrow">Where it fits</p>
          <h2 data-i18n="use.title">Protect the moments attackers target first.</h2>
          <p data-i18n="use.lede">Deploy phone-risk checks at the identity events fraud teams care about most.</p>
        </div>
        <div class="use-case-list">
          <article class="use-case-row">
            <span class="use-case-row-index">01</span>
            <div class="use-case-row-copy">
              <h3 data-i18n="use.1.title">Login recovery</h3>
              <p data-i18n="use.1.body">Check SIM-swap risk before allowing password resets or device re-enrollment.</p>
            </div>
            <figure class="use-case-row-thumb">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=400&q=80"
                alt="Secure login recovery"
                loading="lazy"
              />
            </figure>
          </article>
          <article class="use-case-row">
            <span class="use-case-row-index">02</span>
            <div class="use-case-row-copy">
              <h3 data-i18n="use.2.title">Wallet withdrawals</h3>
              <p data-i18n="use.2.body">Step up verification before crypto, fintech, or stored-value transfers.</p>
            </div>
            <figure class="use-case-row-thumb">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80"
                alt="Wallet and withdrawal security"
                loading="lazy"
              />
            </figure>
          </article>
          <article class="use-case-row">
            <span class="use-case-row-index">03</span>
            <div class="use-case-row-copy">
              <h3 data-i18n="use.3.title">New payees</h3>
              <p data-i18n="use.3.body">Detect phone-number compromise before adding payout destinations.</p>
            </div>
            <figure class="use-case-row-thumb">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80"
                alt="New payee verification"
                loading="lazy"
              />
            </figure>
          </article>
          <article class="use-case-row">
            <span class="use-case-row-index">04</span>
            <div class="use-case-row-copy">
              <h3 data-i18n="use.4.title">High-risk onboarding</h3>
              <p data-i18n="use.4.body">Combine phone intelligence with KYC and fraud-screening flows.</p>
            </div>
            <figure class="use-case-row-thumb">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
                alt="High-risk onboarding review"
                loading="lazy"
              />
            </figure>
          </article>
        </div>
      </div>
    </section>
  `;
}
