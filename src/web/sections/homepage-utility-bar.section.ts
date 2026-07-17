export function renderHomepageUtilityBarSection(): string {
  return `
    <section class="homepage-utility-bar" aria-label="Account links and region">
      <div class="utility-announcement">
        <span data-i18n="util.platform">Telvri Security Platform</span>
      </div>
      <div class="utility-links">
        <a class="utility-phone" href="tel:+18005881656" aria-label="Call Telvri Security" data-i18n-aria="util.call">
          <span aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
              <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
              <path d="M10 18h4"></path>
            </svg>
          </span>
          <span>+1 (800) 588-1656</span>
        </a>
        <label class="country-select">
          <span data-i18n="util.region">Region</span>
          <select
            aria-label="Select country or region"
            data-i18n-aria="util.regionSelect"
            data-region-select
          >
            <option value="US">United States (EN)</option>
            <option value="AU">Australia</option>
            <option value="BR">Brazil</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            <option value="IN">India</option>
            <option value="JP">Japan</option>
            <option value="KR">Korea</option>
            <option value="MX">Mexico</option>
            <option value="NL">Netherlands</option>
            <option value="SG">Singapore</option>
            <option value="ES">Spain</option>
            <option value="SE">Sweden</option>
            <option value="GB">United Kingdom</option>
          </select>
        </label>
        <a href="/login" data-i18n="util.login">Login</a>
      </div>
    </section>
  `;
}
