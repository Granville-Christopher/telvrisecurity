export function renderSiteDialogStyles(): string {
  return `
            .site-dialog-overlay {
              position: fixed;
              inset: 0;
              z-index: 100;
              display: grid;
              place-items: center;
              padding: 24px;
              background: rgba(8, 6, 14, 0.72);
              backdrop-filter: blur(6px);
            }

            .site-dialog {
              width: min(100%, 420px);
              padding: 24px;
              border: 1px solid rgba(167,139,250,0.28);
              border-radius: 16px;
              color: #f4f2fb;
              background: linear-gradient(180deg, #1a1428, #120e1c);
              box-shadow: 0 28px 80px rgba(0,0,0,0.45);
            }

            .site-dialog.is-danger {
              border-color: rgba(248,113,113,0.35);
            }

            .site-dialog h3 {
              margin: 0;
              font-size: 1.15rem;
              font-weight: 800;
            }

            .site-dialog p {
              margin: 12px 0 0;
              color: rgba(244,242,251,0.72);
              line-height: 1.55;
              white-space: pre-wrap;
            }

            .site-dialog-actions {
              display: flex;
              justify-content: flex-end;
              flex-wrap: wrap;
              gap: 10px;
              margin-top: 22px;
            }

            button.site-dialog-cancel,
            button.site-dialog-accept {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              box-sizing: border-box;
              min-height: 40px;
              padding: 0 18px !important;
              border-radius: 10px;
              font: inherit;
              font-size: 0.95rem;
              font-weight: 700;
              line-height: 1.2;
              cursor: pointer;
            }

            button.site-dialog-cancel {
              color: rgba(244,242,251,0.85);
              background: rgba(255,255,255,0.06);
              border: 1px solid rgba(255,255,255,0.14);
            }

            button.site-dialog-accept {
              color: #fff;
              background: var(--accent);
              border: 1px solid var(--accent);
            }

            button.site-dialog-accept:hover {
              background: var(--accent-dark);
              border-color: var(--accent-dark);
            }

            .site-dialog.is-danger button.site-dialog-accept {
              background: #dc2626;
              border-color: #dc2626;
            }

            .site-dialog.is-danger button.site-dialog-accept:hover {
              background: #b91c1c;
              border-color: #b91c1c;
            }
  `;
}
