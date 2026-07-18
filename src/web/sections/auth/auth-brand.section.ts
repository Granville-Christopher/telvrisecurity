export function renderAuthBrandSection(): string {
  return `
    <a
      class="auth-brand inline-flex shrink-0 items-center"
      href="/"
      aria-label="Telvri Security home"
    >
      <img
        src="/media/logo/telvripurple.png?v=3"
        alt="Telvri Security"
        class="block h-16 w-auto max-w-[min(260px,70vw)] object-contain sm:h-20 md:h-24"
      />
    </a>
  `;
}
