import { escapeAttribute, escapeHtml } from '../../rendering/html.utils';
import { renderAuthPasswordField } from './auth-password-field.section';
import { AuthPageState } from './auth-page.types';

export function renderLoginSection(state: AuthPageState = {}): string {
  const emailValue = state.email ? ` value="${escapeAttribute(state.email)}"` : '';
  const errorBlock = state.errorMessage
    ? `<p class="auth-alert" role="alert">${escapeHtml(state.errorMessage)}</p>`
    : '';

  return `
    <section class="auth-page">
      <div class="auth-page-shell">
        <div class="auth-page-intro">
          <p class="eyebrow">Developer access</p>
          <h1>Sign in to Telvri Security</h1>
          <p>
            Access your dashboard, copy API keys, and explore SDK examples for SIM-swap
            intelligence before production rollout.
          </p>
          <ul class="auth-points" aria-label="Login benefits">
            <li>Live-style sandbox API keys</li>
            <li>Swagger and OpenAPI tooling</li>
            <li>SDK examples across 8 languages</li>
          </ul>
        </div>
        <div class="auth-card">
          <h2>Login</h2>
          <p class="auth-card-lede">Use your developer credentials to continue.</p>
          ${errorBlock}
          <p class="auth-alert auth-alert-inline" data-auth-error hidden role="alert"></p>
          <form class="auth-form" method="post" action="/auth/login" data-auth-form novalidate>
            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                autocomplete="email"
                placeholder="dev@company.example"
                required
                ${emailValue}
              />
            </label>
            ${renderAuthPasswordField({
              label: 'Password',
              name: 'password',
              id: 'login-password',
              autocomplete: 'current-password',
              placeholder: 'Enter your password',
            })}
            <button class="button primary auth-submit" type="submit">Sign in</button>
          </form>
          <p class="auth-switch">
            New to Telvri Security?
            <a href="/signup">Create an account</a>
          </p>
        </div>
      </div>
    </section>
  `;
}
