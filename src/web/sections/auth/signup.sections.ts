import { renderAuthBrandSection } from './auth-brand.section';
import { renderSignupSection } from './signup.section';
import { AuthPageState } from './auth-page.types';

export function renderSignupPageSections(state: AuthPageState = {}): string {
  return `
    <main class="auth-shell">
      <header class="auth-header">
        ${renderAuthBrandSection()}
        <nav class="auth-header-links" aria-label="Auth navigation">
          <a href="/docs">API Docs</a>
          <a href="/login">Sign in</a>
        </nav>
      </header>
      ${renderSignupSection(state)}
    </main>
  `;
}
