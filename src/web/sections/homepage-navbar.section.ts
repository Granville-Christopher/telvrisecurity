export function renderHomepageNavbarSection(): string {
  return `
    <header class="navbar-shell is-over-hero" data-navbar-shell>
      <a
        class="brand-logo homepage-brand-logo inline-flex shrink-0 items-center"
        href="/"
        aria-label="Telvri Security home"
        data-navbar-logo
      >
        <img
          src="/media/logo/telvriwhite.png?v=3"
          alt="Telvri Security"
          class="block w-auto object-contain"
          width="160"
          height="100"
          data-navbar-logo-img
          data-logo-hero="/media/logo/telvriwhite.png?v=3"
          data-logo-scrolled="/media/logo/telvripurple.png?v=3"
        />
      </a>
      <button
        class="navbar-toggle"
        type="button"
        aria-expanded="false"
        aria-controls="primary-nav"
        aria-label="Open menu"
        data-i18n-aria="nav.openMenu"
      >
        <span class="navbar-toggle-bar" aria-hidden="true"></span>
        <span class="navbar-toggle-bar" aria-hidden="true"></span>
        <span class="navbar-toggle-bar" aria-hidden="true"></span>
      </button>
      <nav id="primary-nav" class="nav-pill py-1.5 pl-5 pr-2" aria-label="Primary navigation" data-i18n-aria="nav.primary">
        <div class="nav-actions gap-3.5 text-[13px] font-semibold tracking-tight">
          <a class="text-white/85 transition-colors hover:text-white" href="#platform" data-i18n="nav.platform">Platform</a>
          <a class="text-white/85 transition-colors hover:text-white" href="#developers" data-i18n="nav.developers">Developers</a>
          <a class="text-white/85 transition-colors hover:text-white" href="/docs" data-i18n="nav.docs">API Docs</a>
          <a
            class="button ghost !h-8 !min-h-8 !rounded-full !px-3.5 !text-[13px] !font-semibold"
            href="/signup"
            data-i18n="nav.getStarted"
          >Get Started</a>
        </div>
      </nav>
    </header>
  `;
}
