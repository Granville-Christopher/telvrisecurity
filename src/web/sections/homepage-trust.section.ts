export function renderHomepageTrustSection(): string {
  return `
    <section class="trust-strip reveal-up" aria-label="Built for high-risk identity workflows" data-i18n-aria="trust.label">
      <span data-i18n="trust.1">Account takeover defense</span>
      <span data-i18n="trust.2">Wallet recovery</span>
      <span data-i18n="trust.3">Payout protection</span>
      <span data-i18n="trust.4">Marketplace trust</span>
      <span data-i18n="trust.5">High-risk login checks</span>
    </section>
  `;
}
