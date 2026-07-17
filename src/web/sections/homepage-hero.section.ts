export function renderHomepageHeroSection(): string {
  return `
    <section class="hero homepage-hero-image">
      <div class="hero-copy homepage-hero-copy reveal-up">
        <p class="eyebrow">Identity firewall for phone-number risk</p>
        <h1>
          <span>Telvri Security secures mobile identity</span>
          <strong>And every high-risk phone signal, from machine to human.</strong>
        </h1>
        <p class="lede">
          A developer-first security API for detecting high-risk mobile identity changes
          before login recovery, payouts, wallet resets, and sensitive account actions.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="/signup">Get started</a>
          <a class="button secondary" href="/docs">Contact sales</a>
        </div>
      </div>
    </section>
  `;
}
