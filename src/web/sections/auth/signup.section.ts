import { escapeAttribute, escapeHtml } from '../../rendering/html.utils';
import { renderAuthPasswordField } from './auth-password-field.section';
import { AuthPageState } from './auth-page.types';

export function renderSignupSection(state: AuthPageState = {}): string {
  const emailValue = state.email ? ` value="${escapeAttribute(state.email)}"` : '';
  const fullNameValue = state.fullName ? ` value="${escapeAttribute(state.fullName)}"` : '';
  const companyValue = state.company ? ` value="${escapeAttribute(state.company)}"` : '';
  const errorBlock = state.errorMessage
    ? `<p class="auth-alert" role="alert">${escapeHtml(state.errorMessage)}</p>`
    : '';

  return `
    <section class="auth-page">
      <div class="auth-page-shell">
        <div class="auth-page-intro">
          <p class="eyebrow">Create account</p>
          <h1>Start building with Telvri Security</h1>
          <p>
            Register for dashboard access, generate API credentials, and integrate SIM-swap
            checks into login recovery, payouts, and wallet protection flows.
          </p>
          <ul class="auth-points" aria-label="Signup benefits">
            <li>Instant developer sandbox access</li>
            <li>OpenAPI-driven SDK generation</li>
            <li>Production-ready security workflows</li>
          </ul>
        </div>
        <div class="auth-card">
          <h2>Sign up</h2>
          <p class="auth-card-lede">Create your developer account in minutes.</p>
          ${errorBlock}
          <form class="auth-form" method="post" action="/auth/signup" novalidate>
            <label>
              <span>Full name</span>
              <input
                type="text"
                name="fullName"
                autocomplete="name"
                placeholder="Ada Okonkwo"
                minlength="2"
                required
                ${fullNameValue}
              />
            </label>
            <label>
              <span>Work email</span>
              <input
                type="email"
                name="email"
                autocomplete="email"
                placeholder="ada@company.example"
                required
                ${emailValue}
              />
            </label>
            <label>
              <span>Company <em>(optional)</em></span>
              <input
                type="text"
                name="company"
                autocomplete="organization"
                placeholder="Northwind Fintech"
                ${companyValue}
              />
            </label>
            ${renderAuthPasswordField({
              label: 'Password',
              name: 'password',
              id: 'signup-password',
              autocomplete: 'new-password',
              placeholder: 'Minimum 8 characters',
            })}
            ${renderAuthPasswordField({
              label: 'Confirm password',
              name: 'confirmPassword',
              id: 'signup-confirm-password',
              autocomplete: 'new-password',
              placeholder: 'Re-enter your password',
            })}
            <button class="button primary auth-submit" type="submit">Create account</button>
          </form>
          <p class="auth-switch">
            Already have an account?
            <a href="/login">Sign in</a>
          </p>
        </div>
      </div>
    </section>
  `;
}
