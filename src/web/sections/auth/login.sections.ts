import { renderAuthBrandSection } from './auth-brand.section';
import { renderLoginSection } from './login.section';
import { AuthPageState } from './auth-page.types';

export function renderLoginPageSections(state: AuthPageState = {}): string {
  return `
    <main class="auth-shell">
      <header class="auth-header">
        ${renderAuthBrandSection()}
        <nav class="auth-header-links" aria-label="Auth navigation">
          <a href="/docs">API Docs</a>
          <a href="/signup">Sign up</a>
        </nav>
      </header>
      ${renderLoginSection(state)}
    </main>
  `;
}
