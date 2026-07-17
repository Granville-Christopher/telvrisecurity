export function renderHomepageHeroSection(): string {
  return `
    <section class="hero homepage-hero-image" data-homepage-hero>
      <div class="hero-copy homepage-hero-copy reveal-up">
        <p class="eyebrow" data-i18n="hero.eyebrow">Identity firewall for phone-number risk</p>
        <h1>
          <span data-i18n="hero.title1">Telvri Security secures mobile identity</span>
          <strong data-i18n="hero.title2">And every high-risk phone signal, from machine to human.</strong>
        </h1>
        <p class="lede" data-i18n="hero.lede">
          A developer-first security API for detecting high-risk mobile identity changes
          before login recovery, payouts, wallet resets, and sensitive account actions.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="/signup" data-i18n="hero.ctaPrimary">Get started</a>
          <a class="button secondary" href="/docs" data-i18n="hero.ctaSecondary">Contact sales</a>
        </div>
      </div>
    </section>
  `;
}
