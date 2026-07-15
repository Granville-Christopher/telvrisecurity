import { escapeAttribute } from '../../rendering/html.utils';

export interface AuthPasswordFieldOptions {
  readonly label: string;
  readonly name: string;
  readonly id: string;
  readonly autocomplete: string;
  readonly placeholder: string;
}

export function renderAuthPasswordField(options: AuthPasswordFieldOptions): string {
  const inputId = escapeAttribute(options.id);
  const inputName = escapeAttribute(options.name);

  return `
    <label>
      <span>${options.label}</span>
      <span class="auth-password-field">
        <input
          id="${inputId}"
          type="password"
          name="${inputName}"
          autocomplete="${escapeAttribute(options.autocomplete)}"
          placeholder="${escapeAttribute(options.placeholder)}"
          minlength="8"
          required
        />
        <button
          type="button"
          class="auth-password-toggle"
          data-password-toggle="${inputId}"
          aria-label="Show password"
          aria-pressed="false"
        >
          <svg
            class="auth-password-icon auth-password-icon-show"
            viewBox="0 0 24 24"
            role="img"
            focusable="false"
            aria-hidden="true"
          >
            <path
              d="M2.25 12c1.8-4.2 5.7-7 9.75-7s8 2.8 9.75 7c-1.8 4.2-5.7 7-9.75 7s-8-2.8-9.75-7Z"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle cx="12" cy="12" r="2.8" fill="none" stroke="currentColor" stroke-width="1.8" />
          </svg>
          <svg
            class="auth-password-icon auth-password-icon-hide"
            viewBox="0 0 24 24"
            role="img"
            focusable="false"
            aria-hidden="true"
          >
            <path
              d="M3 3l18 18"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
            />
            <path
              d="M10.7 10.7A3 3 0 0 0 12 15a3 3 0 0 0 2.3-1.1M6.2 6.2C4.5 7.4 3 9.1 2.25 12c1.8 4.2 5.7 7 9.75 7 1.8 0 3.5-.5 5-1.3M9.9 5.1A10.3 10.3 0 0 1 12 5c4.05 0 8 2.8 9.75 7-.7 1.6-1.7 3-2.9 4.2"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </span>
    </label>
  `;
}
