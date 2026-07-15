export function renderAuthStyles(): string {
  return `
            .auth-shell {
              min-height: 100vh;
              color: var(--ink);
              background:
                radial-gradient(circle at 12% 18%, rgba(124,58,237,0.18), transparent 28%),
                radial-gradient(circle at 88% 0%, rgba(61,36,96,0.22), transparent 32%),
                linear-gradient(180deg, #f8f6fc 0%, #f1edf8 42%, #ece7f5 100%);
            }

            .auth-header {
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 20px;
              max-width: 1180px;
              margin: 0 auto;
              padding: 24px 32px 8px;
            }

            .auth-header-links {
              display: flex;
              align-items: center;
              gap: 18px;
              font-size: 0.9rem;
              font-weight: 700;
            }

            .auth-header-links a {
              color: var(--purple);
            }

            .auth-header-links a:hover {
              color: var(--accent);
            }

            .auth-page {
              display: grid;
              place-items: center;
              padding: 24px 32px 56px;
            }

            .auth-page-shell {
              display: grid;
              grid-template-columns: minmax(0, 1fr) minmax(360px, 440px);
              gap: 40px;
              align-items: center;
              width: min(100%, 1180px);
            }

            .auth-page-intro .eyebrow {
              margin: 0 0 12px;
              color: var(--accent);
              font-size: 0.76rem;
              font-weight: 850;
              letter-spacing: 0.08em;
              text-transform: uppercase;
            }

            .auth-page-intro h1 {
              margin: 0;
              color: var(--ink);
              font-size: clamp(1.8rem, 3.4vw, 2.8rem);
              line-height: 1.08;
              font-weight: 750;
              letter-spacing: -0.02em;
            }

            .auth-page-intro p {
              max-width: 520px;
              margin: 16px 0 0;
              color: var(--muted);
              font-size: 1rem;
              line-height: 1.65;
            }

            .auth-points {
              display: grid;
              gap: 10px;
              margin: 24px 0 0;
              padding: 0;
              list-style: none;
            }

            .auth-points li {
              position: relative;
              padding-left: 22px;
              color: var(--ink);
              font-weight: 650;
            }

            .auth-points li::before {
              content: "";
              position: absolute;
              left: 0;
              top: 0.55em;
              width: 8px;
              height: 8px;
              border-radius: 999px;
              background: linear-gradient(135deg, var(--accent), var(--purple-light));
              box-shadow: 0 0 0 4px rgba(124,58,237,0.12);
            }

            .auth-card {
              padding: 28px;
              border: 1px solid rgba(91,52,137,0.16);
              border-radius: 18px;
              background: rgba(255,255,255,0.94);
              box-shadow: 0 24px 70px rgba(61,36,96,0.12);
              backdrop-filter: blur(12px);
            }

            .auth-card h2 {
              margin: 0;
              color: var(--ink);
              font-size: 1.55rem;
              line-height: 1.1;
            }

            .auth-card-lede {
              margin: 8px 0 0;
              color: var(--muted);
              font-size: 0.94rem;
              line-height: 1.5;
            }

            .auth-alert {
              margin: 16px 0 0;
              padding: 12px 14px;
              border: 1px solid rgba(214,69,69,0.28);
              border-radius: 10px;
              color: #8f1f1f;
              background: #fff4f4;
              font-size: 0.9rem;
              line-height: 1.45;
            }

            .auth-form {
              display: grid;
              gap: 14px;
              margin-top: 20px;
            }

            .auth-form label {
              display: grid;
              gap: 8px;
            }

            .auth-form label > span:not(.auth-password-field) {
              color: var(--ink);
              font-size: 0.86rem;
              font-weight: 750;
            }

            .auth-form label span em {
              color: var(--muted);
              font-style: normal;
              font-weight: 650;
            }

            .auth-password-field {
              position: relative;
              display: block;
            }

            .auth-password-field input {
              width: 100%;
              min-height: 46px;
              padding: 0 48px 0 14px;
              border: 1px solid rgba(91,52,137,0.18);
              border-radius: 10px;
              color: var(--ink);
              background: #fff;
              font: inherit;
              font-size: 0.94rem;
            }

            .auth-password-toggle {
              position: absolute;
              top: 50%;
              right: 8px;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              width: 34px;
              height: 34px;
              padding: 0;
              border: 0;
              border-radius: 8px;
              color: var(--muted);
              background: transparent;
              cursor: pointer;
              transform: translateY(-50%);
            }

            .auth-password-toggle:hover {
              color: var(--accent);
              background: rgba(124,58,237,0.08);
            }

            .auth-password-icon {
              width: 18px;
              height: 18px;
            }

            .auth-password-icon-hide {
              display: none;
            }

            .auth-password-toggle.is-visible .auth-password-icon-show {
              display: none;
            }

            .auth-password-toggle.is-visible .auth-password-icon-hide {
              display: block;
            }

            .auth-form input {
              width: 100%;
              min-height: 46px;
              padding: 0 14px;
              border: 1px solid rgba(91,52,137,0.18);
              border-radius: 10px;
              color: var(--ink);
              background: #fff;
              font: inherit;
              font-size: 0.94rem;
            }

            .auth-form input:focus {
              outline: none;
              border-color: rgba(124,58,237,0.55);
              box-shadow: 0 0 0 4px rgba(124,58,237,0.12);
            }

            .auth-password-field input:focus {
              outline: none;
              border-color: rgba(124,58,237,0.55);
              box-shadow: 0 0 0 4px rgba(124,58,237,0.12);
            }

            .auth-submit {
              width: 100%;
              min-height: 46px;
              margin-top: 4px;
              border-radius: 10px;
              font-size: 0.94rem;
              font-weight: 800;
            }

            .auth-switch {
              margin: 18px 0 0;
              color: var(--muted);
              font-size: 0.9rem;
              text-align: center;
            }

            .auth-switch a {
              color: var(--accent);
              font-weight: 800;
            }

            @media (max-width: 860px) {
              .auth-header,
              .auth-page {
                padding-left: 18px;
                padding-right: 18px;
              }

              .auth-page-shell {
                grid-template-columns: 1fr;
                gap: 24px;
              }

              .auth-page-intro h1 {
                font-size: 1.9rem;
              }
            }
  `;
}
