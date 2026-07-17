export function renderHomepageFooterSection(): string {
  return `
    <footer class="site-footer">
      <div class="footer-brand">
        <a
          class="brand-logo inline-flex shrink-0 items-center"
          href="/"
          aria-label="Telvri Security home"
        >
          <img
            src="/media/logo/telvriwhite.png"
            alt="Telvri Security"
            class="block h-20 w-auto max-w-[min(320px,100%)] object-contain sm:h-24 md:h-28"
          />
        </a>
        <p data-i18n="footer.tagline">Developer-first telco identity security for fraud-resistant account workflows.</p>
      </div>
      <div class="footer-grid">
        <div>
          <h3 data-i18n="footer.platform">Platform</h3>
          <a href="#platform" data-i18n="footer.sim">SIM-swap checks</a>
          <a href="/docs" data-i18n="footer.swagger">Swagger docs</a>
          <a href="/docs-json" data-i18n="footer.openapi">OpenAPI JSON</a>
        </div>
        <div>
          <h3 data-i18n="footer.developers">Developers</h3>
          <a href="/login" data-i18n="footer.dashboard">Dashboard</a>
          <a href="/login" data-i18n="footer.keys">API keys</a>
          <a href="/login" data-i18n="footer.sdks">SDK examples</a>
        </div>
        <div>
          <h3 data-i18n="footer.security">Security</h3>
          <a href="#developers" data-i18n="footer.recovery">Account recovery</a>
          <a href="#platform" data-i18n="footer.payout">Payout protection</a>
          <a href="#platform" data-i18n="footer.risk">Risk decisions</a>
        </div>
        <div>
          <h3 data-i18n="footer.company">Company</h3>
          <a href="tel:+18005881656">+1 (800) 588-1656</a>
          <a href="/login" data-i18n="footer.login">Login</a>
          <a href="/docs" data-i18n="footer.contact">Contact</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span data-i18n="footer.rights">© 2026 Telvri Security. All rights reserved.</span>
        <span data-i18n="footer.built">Built for developer-first identity security.</span>
      </div>
    </footer>
  `;
}
