export function renderHomepageNavbarSection(): string {
  return `
    <header class="navbar-shell">
      <a
        class="brand-logo inline-flex shrink-0 items-center rounded-full bg-[linear-gradient(to_bottom,transparent,transparent,white,transparent,transparent)] px-3 py-3"
        href="/"
        aria-label="Telvri Security home"
      >
        <img
          src="/media/logo/telvri.png"
          alt="Telvri Security"
          class="block h-20 w-auto max-w-[min(320px,52vw)] object-contain sm:h-24 md:h-28"
        />
      </a>
      <button
        class="navbar-toggle"
        type="button"
        aria-expanded="false"
        aria-controls="primary-nav"
        aria-label="Open menu"
      >
        <span class="navbar-toggle-bar" aria-hidden="true"></span>
        <span class="navbar-toggle-bar" aria-hidden="true"></span>
        <span class="navbar-toggle-bar" aria-hidden="true"></span>
      </button>
      <nav id="primary-nav" class="nav-pill py-1.5 pl-5 pr-2" aria-label="Primary navigation">
        <div class="nav-actions gap-3.5 text-[13px] font-semibold tracking-tight">
          <a class="text-white/85 transition-colors hover:text-white" href="#platform">Platform</a>
          <a class="text-white/85 transition-colors hover:text-white" href="#developers">Developers</a>
          <a class="text-white/85 transition-colors hover:text-white" href="/docs">API Docs</a>
          <a
            class="button ghost !h-8 !min-h-8 !rounded-full !px-3.5 !text-[13px] !font-semibold"
            href="/signup"
          >Get Started</a>
        </div>
      </nav>
    </header>
  `;
}
