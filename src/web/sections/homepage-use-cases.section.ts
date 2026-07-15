export function renderHomepageUseCasesSection(): string {
  return `
    <section class="use-case-section reveal-up">
      <div class="use-case-layout">
        <div class="use-case-intro section-heading">
          <p class="eyebrow">Where it fits</p>
          <h2>Protect the moments attackers target first.</h2>
          <p>Deploy phone-risk checks at the identity events fraud teams care about most.</p>
        </div>
        <div class="use-case-list">
          <article class="use-case-row">
            <span class="use-case-row-index">01</span>
            <div class="use-case-row-copy">
              <h3>Login recovery</h3>
              <p>Check SIM-swap risk before allowing password resets or device re-enrollment.</p>
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
              <h3>Wallet withdrawals</h3>
              <p>Step up verification before crypto, fintech, or stored-value transfers.</p>
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
              <h3>New payees</h3>
              <p>Detect phone-number compromise before adding payout destinations.</p>
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
              <h3>High-risk onboarding</h3>
              <p>Combine phone intelligence with KYC and fraud-screening flows.</p>
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
