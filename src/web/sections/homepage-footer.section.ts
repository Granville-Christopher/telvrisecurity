export function renderHomepageFooterSection(): string {
  return `
    <footer class="site-footer">
      <div class="footer-brand">
        <a
          class="brand-logo inline-flex shrink-0 items-center rounded-full bg-[linear-gradient(to_bottom,transparent,transparent,white,transparent,transparent)] px-3 py-3"
          href="/"
          aria-label="Telvri Security home"
        >
          <img
            src="/media/logo/telvri.png"
            alt="Telvri Security"
            class="block h-20 w-auto max-w-[min(320px,100%)] object-contain sm:h-24 md:h-28"
          />
        </a>
        <p>Developer-first telco identity security for fraud-resistant account workflows.</p>
      </div>
      <div class="footer-grid">
        <div>
          <h3>Platform</h3>
          <a href="#platform">SIM-swap checks</a>
          <a href="/docs">Swagger docs</a>
          <a href="/docs-json">OpenAPI JSON</a>
        </div>
        <div>
          <h3>Developers</h3>
          <a href="/login">Dashboard</a>
          <a href="/login">API keys</a>
          <a href="/login">SDK examples</a>
        </div>
        <div>
          <h3>Security</h3>
          <a href="#developers">Account recovery</a>
          <a href="#platform">Payout protection</a>
          <a href="#platform">Risk decisions</a>
        </div>
        <div>
          <h3>Company</h3>
          <a href="tel:+18005881656">+1 (800) 588-1656</a>
          <a href="/login">Login</a>
          <a href="/docs">Contact</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Telvri Security. All rights reserved.</span>
        <span>Built for developer-first identity security.</span>
      </div>
    </footer>
  `;
}
