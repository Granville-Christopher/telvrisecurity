export function renderHomepageUtilityBarSection(): string {
  return `
    <section class="homepage-utility-bar" aria-label="Security event and account links">
      <div class="utility-announcement">
        <span>Telvri Security Platform</span>
      </div>
      <div class="utility-links">
        <a class="utility-phone" href="tel:+18005881656" aria-label="Call Telvri Security">
          <span aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
              <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
              <path d="M10 18h4"></path>
            </svg>
          </span>
          <span>+1 (800) 588-1656</span>
        </a>
        <label class="country-select">
          <span>Region</span>
          <select aria-label="Select country or region">
            <option>United States (EN)</option>
            <option>Australia</option>
            <option>Brazil</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
            <option>India</option>
            <option>Japan</option>
            <option>Korea</option>
            <option>Mexico</option>
            <option>Netherlands</option>
            <option>Singapore</option>
            <option>Spain</option>
            <option>Sweden</option>
            <option>United Kingdom</option>
          </select>
        </label>
        <a href="/login">Login</a>
      </div>
    </section>
  `;
}
