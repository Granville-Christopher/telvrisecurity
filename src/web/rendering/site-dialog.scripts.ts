export function renderSiteDialogScripts(): string {
  return `
            const showSiteDialog = ({ title, message, confirmLabel, cancelLabel, tone }) => new Promise((resolve) => {
              const existing = document.querySelector('[data-site-dialog]');
              if (existing) existing.remove();

              const overlay = document.createElement('div');
              overlay.className = 'site-dialog-overlay';
              overlay.setAttribute('data-site-dialog', '');

              const dialog = document.createElement('div');
              dialog.className = 'site-dialog' + (tone === 'danger' ? ' is-danger' : '');
              dialog.setAttribute('role', 'alertdialog');
              dialog.setAttribute('aria-modal', 'true');
              dialog.setAttribute('aria-labelledby', 'site-dialog-title');
              dialog.setAttribute('aria-describedby', 'site-dialog-message');

              const heading = document.createElement('h3');
              heading.id = 'site-dialog-title';
              heading.textContent = title || 'Notice';

              const body = document.createElement('p');
              body.id = 'site-dialog-message';
              body.textContent = message || '';

              const actions = document.createElement('div');
              actions.className = 'site-dialog-actions';

              const close = (accepted) => {
                overlay.remove();
                document.removeEventListener('keydown', onKeyDown);
                resolve(accepted);
              };

              const onKeyDown = (event) => {
                if (event.key === 'Escape') close(false);
              };

              if (cancelLabel) {
                const cancelBtn = document.createElement('button');
                cancelBtn.type = 'button';
                cancelBtn.className = 'site-dialog-cancel';
                cancelBtn.textContent = cancelLabel;
                cancelBtn.addEventListener('click', () => close(false));
                actions.append(cancelBtn);
              }

              const acceptBtn = document.createElement('button');
              acceptBtn.type = 'button';
              acceptBtn.className = 'site-dialog-accept';
              acceptBtn.textContent = confirmLabel || 'OK';
              acceptBtn.addEventListener('click', () => close(true));
              actions.append(acceptBtn);

              overlay.addEventListener('click', (event) => {
                if (event.target === overlay) close(false);
              });
              document.addEventListener('keydown', onKeyDown);

              dialog.append(heading, body, actions);
              overlay.append(dialog);
              document.body.append(overlay);
              acceptBtn.focus();
            });

            const showAlertModal = (message, options) => showSiteDialog({
              title: (options && options.title) || 'Notice',
              message: message || '',
              confirmLabel: (options && options.confirmLabel) || 'OK',
              tone: options && options.tone,
            }).then(() => undefined);

            const showConfirmModal = (message, options) => showSiteDialog({
              title: (options && options.title) || 'Confirm action',
              message: message || '',
              confirmLabel: (options && options.confirmLabel) || 'Confirm',
              cancelLabel: (options && options.cancelLabel) || 'Cancel',
              tone: (options && options.tone) || 'danger',
            });

            window.showAlertModal = showAlertModal;
            window.showConfirmModal = showConfirmModal;
            window.alert = (message) => {
              void showAlertModal(String(message == null ? '' : message));
            };

            document.querySelectorAll('.auth-alert:not([hidden])').forEach((element) => {
              const message = (element.textContent || '').trim();
              if (!message) return;
              element.hidden = true;
              void showAlertModal(message, { title: 'Unable to continue', tone: 'danger' });
            });
  `;
}
