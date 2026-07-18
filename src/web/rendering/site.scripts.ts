import { renderHomepageRegionScripts } from './homepage-region.scripts';
import { renderSiteDialogScripts } from './site-dialog.scripts';

export function renderSiteScripts(): string {
  return renderSiteDialogScripts() + "            const revealObserver = 'IntersectionObserver' in window\n              ? new IntersectionObserver((entries) => {\n                  entries.forEach((entry) => {\n                    if (entry.isIntersecting) {\n                      entry.target.classList.add('is-visible');\n                      revealObserver.unobserve(entry.target);\n                    }\n                  });\n                }, { threshold: 0.16 })\n              : null;\n\n            document.querySelectorAll('.reveal-up').forEach((section) => {\n              if (section.classList.contains('homepage-hero-copy')) {\n                return;\n              }\n\n              if (revealObserver) {\n                revealObserver.observe(section);\n              } else {\n                section.classList.add('is-visible');\n              }\n            });\n\n            const platformSteps = Array.from(document.querySelectorAll('[data-platform-step]'));\n            const platformCards = Array.from(document.querySelectorAll('[data-platform-card]'));\n            const setActivePlatformStep = (target) => {\n              platformSteps.forEach((step) => {\n                step.classList.toggle('active', step.getAttribute('data-platform-step') === target);\n              });\n              platformCards.forEach((card) => {\n                card.classList.toggle('active', card.getAttribute('data-platform-card') === target);\n              });\n            };\n\n            platformSteps.forEach((step) => {\n              step.addEventListener('click', () => {\n                const target = step.getAttribute('data-platform-step');\n                if (target) {\n                  setActivePlatformStep(target);\n                }\n              });\n            });\n\n            const builtForSteps = Array.from(document.querySelectorAll('[data-built-for-step]'));\n            const builtForCards = Array.from(document.querySelectorAll('[data-built-for-card]'));\n            const setActiveBuiltForStep = (target) => {\n              builtForSteps.forEach((step) => {\n                step.classList.toggle('active', step.getAttribute('data-built-for-step') === target);\n              });\n\n              builtForCards.forEach((card) => {\n                card.classList.toggle('is-active', card.getAttribute('data-built-for-card') === target);\n              });\n            };\n\n            if (builtForCards.length > 0) {\n              setActiveBuiltForStep('agents');\n            }\n\n            if ('IntersectionObserver' in window && builtForCards.length > 0) {\n              const builtForObserver = new IntersectionObserver((entries) => {\n                entries.forEach((entry) => {\n                  if (entry.isIntersecting) {\n                    setActiveBuiltForStep(entry.target.getAttribute('data-built-for-card'));\n                  }\n                });\n              }, { rootMargin: '-35% 0px -45% 0px', threshold: 0.1 });\n\n              builtForCards.forEach((card) => builtForObserver.observe(card));\n            }\n\n            builtForSteps.forEach((step) => {\n              step.addEventListener('click', () => {\n                const target = step.getAttribute('data-built-for-step');\n                const card = document.querySelector('[data-built-for-card=\"' + target + '\"]');\n                if (card) {\n                  card.scrollIntoView({ behavior: 'smooth', block: 'center' });\n                }\n              });\n            });\n\n            const resourceGrid = document.querySelector('[data-resource-grid]');\n            const resourceTabs = Array.from(document.querySelectorAll('[data-resource-topic]'));\n            const renderResources = (resources) => {\n              if (!resourceGrid) return;\n\n              resourceGrid.textContent = '';\n              resources.forEach((resource) => {\n                const card = document.createElement('a');\n                card.className = 'resource-card';\n                card.href = resource.url;\n                card.target = '_blank';\n                card.rel = 'noreferrer';\n\n                const media = document.createElement('div');\n                media.className = 'card-media';\n                media.style.backgroundImage = 'linear-gradient(135deg, rgba(5,16,24,0.92), rgba(91,52,137,0.55)), url(\"' + resource.image + '\")';\n\n                const type = document.createElement('span');\n                type.textContent = resource.type;\n\n                const title = document.createElement('h3');\n                title.textContent = resource.title;\n\n                const description = document.createElement('p');\n                description.textContent = resource.description;\n\n                card.append(media, type, title, description);\n                resourceGrid.appendChild(card);\n              });\n            };\n\n            const loadResources = async (topic) => {\n              if (!resourceGrid) return;\n\n              resourceGrid.innerHTML = '<article class=\"resource-loading\">Fetching live resources...</article>';\n              resourceTabs.forEach((tab) => {\n                tab.classList.toggle('active', tab.getAttribute('data-resource-topic') === topic);\n              });\n\n              try {\n                const response = await fetch('/homepage/resources?topic=' + encodeURIComponent(topic));\n                const payload = await response.json();\n                renderResources(payload.resources || []);\n              } catch {\n                resourceGrid.innerHTML = '<article class=\"resource-loading\">Resources are temporarily unavailable.</article>';\n              }\n            };\n\n            resourceTabs.forEach((tab) => {\n              tab.addEventListener('click', () => {\n                const topic = tab.getAttribute('data-resource-topic') || 'ai-innovation';\n                loadResources(topic);\n              });\n            });\n\n            if (resourceGrid) {\n              loadResources('ai-innovation');\n            }\n\n            document.querySelectorAll('[data-dashboard-tab]').forEach((tab) => {\n              tab.addEventListener('click', () => {\n                const target = tab.getAttribute('data-dashboard-tab');\n                if (!target) return;\n\n                document.querySelectorAll('[data-dashboard-tab]').forEach((candidate) => {\n                  candidate.classList.toggle('active', candidate.getAttribute('data-dashboard-tab') === target);\n                });\n\n                document.querySelectorAll('[data-dashboard-panel]').forEach((panel) => {\n                  panel.classList.toggle('active', panel.getAttribute('data-dashboard-panel') === target);\n                });\n              });\n            });\n\n            document.querySelectorAll('[data-sdk-tab]').forEach((tab) => {\n              tab.addEventListener('click', () => {\n                const target = tab.getAttribute('data-sdk-tab');\n                if (!target) return;\n\n                document.querySelectorAll('[data-sdk-tab]').forEach((candidate) => {\n                  candidate.classList.toggle('active', candidate === tab);\n                });\n\n                document.querySelectorAll('[data-sdk-panel]').forEach((panel) => {\n                  panel.classList.toggle('active', panel.getAttribute('data-sdk-panel') === target);\n                });\n              });\n            });\n\n            document.querySelectorAll('[data-copy]').forEach((button) => {\n              button.addEventListener('click', async () => {\n                const value = button.getAttribute('data-copy');\n                if (!value) return;\n                await navigator.clipboard.writeText(value);\n                const original = button.textContent;\n                button.textContent = 'Copied';\n                window.setTimeout(() => {\n                  button.textContent = original;\n                }, 1200);\n              });\n            });\n\n            document.querySelectorAll('[data-password-toggle]').forEach((button) => {\n              button.addEventListener('click', () => {\n                const targetId = button.getAttribute('data-password-toggle');\n                if (!targetId) return;\n\n                const input = document.getElementById(targetId);\n                if (!(input instanceof HTMLInputElement)) return;\n\n                const isHidden = input.type === 'password';\n                input.type = isHidden ? 'text' : 'password';\n                button.classList.toggle('is-visible', isHidden);\n                button.setAttribute('aria-pressed', String(isHidden));\n                button.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');\n              });\n            });\n\n            const navbarShell = document.querySelector('.navbar-shell');\n            const navbarToggle = document.querySelector('.navbar-toggle');\n\n            const setNavbarOpen = (isOpen) => {\n              if (!navbarShell || !navbarToggle) return;\n              navbarShell.classList.toggle('is-open', isOpen);\n              navbarToggle.setAttribute('aria-expanded', String(isOpen));\n              navbarToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');\n            };\n\n            if (navbarShell && navbarToggle) {\n              navbarToggle.addEventListener('click', () => {\n                setNavbarOpen(!navbarShell.classList.contains('is-open'));\n              });\n\n              navbarShell.querySelectorAll('.nav-pill a').forEach((link) => {\n                link.addEventListener('click', () => {\n                  setNavbarOpen(false);\n                });\n              });\n\n              document.addEventListener('keydown', (event) => {\n                if (event.key === 'Escape') {\n                  setNavbarOpen(false);\n                }\n              });\n\n              window.addEventListener('resize', () => {\n                if (window.innerWidth > 860) {\n                  setNavbarOpen(false);\n                }\n              });\n            }\n\n            const dashboardShell = document.querySelector('[data-dashboard-shell]');\n            const dashboardMenu = document.querySelector('[data-dashboard-menu]');\n            const dashboardCloseElements = Array.from(document.querySelectorAll('[data-dashboard-close]'));\n\n            const setDashboardMenu = (isOpen) => {\n              if (!dashboardShell) return;\n              dashboardShell.classList.toggle('is-sidebar-open', isOpen);\n              if (dashboardMenu) {\n                dashboardMenu.setAttribute('aria-expanded', String(isOpen));\n                dashboardMenu.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');\n              }\n              document.body.style.overflow = isOpen && window.innerWidth <= 860 ? 'hidden' : '';\n            };\n\n            if (dashboardShell && dashboardMenu) {\n              dashboardMenu.addEventListener('click', () => {\n                setDashboardMenu(!dashboardShell.classList.contains('is-sidebar-open'));\n              });\n\n              dashboardCloseElements.forEach((element) => {\n                element.addEventListener('click', () => setDashboardMenu(false));\n              });\n\n              dashboardShell.querySelectorAll('.sidebar .dashboard-nav-item, .sidebar nav a').forEach((item) => {\n                item.addEventListener('click', () => {\n                  if (window.innerWidth <= 860) {\n                    setDashboardMenu(false);\n                  }\n                });\n              });\n\n              document.addEventListener('keydown', (event) => {\n                if (event.key === 'Escape') {\n                  setDashboardMenu(false);\n                }\n              });\n\n              window.addEventListener('resize', () => {\n                if (window.innerWidth > 860) {\n                  setDashboardMenu(false);\n                }\n              });\n            }\r\n" + renderHomepageNavbarScripts() + renderHomepageRegionScripts() + renderDashboardKeyScripts() + renderAuthFormScripts();
}

export function renderHomepageNavbarScripts(): string {
  return `
            const homepageHero = document.querySelector('[data-homepage-hero]');
            const homepageNavbar = document.querySelector('[data-navbar-shell]') || document.querySelector('.navbar-shell');
            const navbarLogoImg = document.querySelector('[data-navbar-logo-img]');
            const setNavbarHeroState = (isOverHero) => {
              if (!homepageNavbar) return;
              homepageNavbar.classList.toggle('is-over-hero', isOverHero);
              if (navbarLogoImg) {
                const heroSrc = navbarLogoImg.getAttribute('data-logo-hero') || '/media/logo/telvriwhite.png';
                const scrolledSrc = navbarLogoImg.getAttribute('data-logo-scrolled') || '/media/logo/telvripurple.png';
                const nextSrc = isOverHero ? heroSrc : scrolledSrc;
                if (navbarLogoImg.getAttribute('src') !== nextSrc) {
                  navbarLogoImg.setAttribute('src', nextSrc);
                }
              }
            };

            if (navbarLogoImg) {
              const purpleLogo = new Image();
              purpleLogo.src = navbarLogoImg.getAttribute('data-logo-scrolled') || '/media/logo/telvripurple.png';
            }

            if (homepageNavbar && homepageHero && 'IntersectionObserver' in window) {
              const heroObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                  setNavbarHeroState(entry.isIntersecting);
                });
              }, { threshold: 0.12, rootMargin: '-48px 0px 0px 0px' });
              heroObserver.observe(homepageHero);
            } else if (homepageNavbar && homepageHero) {
              const syncHeroState = () => {
                const rect = homepageHero.getBoundingClientRect();
                setNavbarHeroState(rect.bottom > 80);
              };
              window.addEventListener('scroll', syncHeroState, { passive: true });
              syncHeroState();
            }
  `;
}

export function renderAuthFormScripts(): string {
  return `
            const authForms = document.querySelectorAll('[data-auth-form]');
            authForms.forEach((form) => {
              const errorEl = form.parentElement ? form.parentElement.querySelector('[data-auth-error]') : null;
              const submitBtn = form.querySelector('button[type="submit"]');
              const originalLabel = submitBtn ? submitBtn.textContent : '';
              form.addEventListener('submit', async (event) => {
                event.preventDefault();
                if (errorEl) { errorEl.hidden = true; errorEl.textContent = ''; }
                const formData = new FormData(form);
                const payload = {};
                formData.forEach((value, key) => { payload[key] = value; });
                if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Please wait...'; }
                try {
                  const response = await fetch(form.action, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'fetch' },
                    body: JSON.stringify(payload),
                  });
                  const data = await response.json().catch(() => ({}));
                  if (!response.ok) {
                    let message = data && data.message ? data.message : 'Something went wrong. Please try again.';
                    if (Array.isArray(message)) message = message.join(' ');
                    throw new Error(message);
                  }
                  window.location.assign(data && data.redirect ? data.redirect : '/dashboard');
                } catch (error) {
                  const message = error && error.message ? error.message : 'Something went wrong.';
                  if (errorEl) {
                    errorEl.hidden = true;
                    errorEl.textContent = '';
                  }
                  await showAlertModal(message, { title: 'Unable to continue', tone: 'danger' });
                  if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalLabel; }
                }
              });
            });
  `;
}

export function renderDashboardKeyScripts(): string {
  return `
            const createKeyForm = document.querySelector('[data-create-key-form]');
            const keyList = document.querySelector('[data-key-list]');
            const expirationSelect = document.querySelector('[data-expiration-select]');
            const customDateWrap = document.querySelector('[data-custom-date]');
            const expiryDateInput = document.querySelector('[data-expiry-date]');
            const keyReveal = document.querySelector('[data-key-reveal]');
            const keyRevealValue = document.querySelector('[data-key-reveal-value]');
            const keyRevealCopy = document.querySelector('[data-key-reveal-copy]');
            const createKeyError = document.querySelector('[data-create-key-error]');
            const regenerateTestKeyBtn = document.querySelector('[data-regenerate-test-key]');
            const dashboardShellEl = document.querySelector('[data-dashboard-shell]');

            const getCsrfToken = () => {
              if (!(dashboardShellEl instanceof HTMLElement)) return '';
              return dashboardShellEl.getAttribute('data-csrf-token') || '';
            };

            const csrfHeaders = (extra) => {
              const headers = Object.assign({ 'X-CSRF-Token': getCsrfToken() }, extra || {});
              return headers;
            };

            const STATUS_LABELS = { active: 'Active', expired: 'Expired', revoked: 'Revoked' };

            const yieldToPaint = () => new Promise((resolve) => {
              window.requestAnimationFrame(() => {
                window.requestAnimationFrame(resolve);
              });
            });

            const formatKeyDate = (value) => {
              if (!value) return '';
              const date = new Date(value);
              if (isNaN(date.getTime())) return '';
              return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
            };

            const buildKeyRow = (key) => {
              const row = document.createElement('article');
              row.className = 'key-row';
              row.setAttribute('data-key-id', key.id);

              const main = document.createElement('div');
              main.className = 'key-row-main';

              const title = document.createElement('div');
              title.className = 'key-row-title';
              const name = document.createElement('strong');
              name.textContent = key.name;
              const status = document.createElement('span');
              status.className = 'key-status key-status-' + key.status;
              status.setAttribute('data-key-status', '');
              status.textContent = STATUS_LABELS[key.status] || key.status;
              title.append(name, status);

              const mask = document.createElement('code');
              mask.className = 'key-row-mask';
              mask.textContent = key.masked;

              const meta = document.createElement('div');
              meta.className = 'key-row-meta';
              const created = document.createElement('span');
              created.textContent = 'Created ' + formatKeyDate(key.createdAt);
              const expires = document.createElement('span');
              expires.textContent = key.expiresAt ? 'Expires ' + formatKeyDate(key.expiresAt) : 'Never expires';
              const used = document.createElement('span');
              used.textContent = key.lastUsedAt ? 'Last used ' + formatKeyDate(key.lastUsedAt) : 'Never used';
              meta.append(created, expires, used);

              main.append(title, mask, meta);

              const actions = document.createElement('div');
              actions.className = 'key-row-actions';
              if (key.status === 'active') {
                const rotateBtn = document.createElement('button');
                rotateBtn.type = 'button';
                rotateBtn.className = 'key-rotate';
                rotateBtn.setAttribute('data-rotate-key', key.id);
                rotateBtn.textContent = 'Rotate';
                actions.append(rotateBtn);
              }
              if (key.status !== 'revoked') {
                const revokeBtn = document.createElement('button');
                revokeBtn.type = 'button';
                revokeBtn.className = 'key-revoke';
                revokeBtn.setAttribute('data-revoke-key', key.id);
                revokeBtn.textContent = 'Revoke';
                actions.append(revokeBtn);
              } else {
                const deleteBtn = document.createElement('button');
                deleteBtn.type = 'button';
                deleteBtn.className = 'key-delete';
                deleteBtn.setAttribute('data-delete-key', key.id);
                deleteBtn.textContent = 'Delete';
                actions.append(deleteBtn);
              }

              row.append(main, actions);
              return row;
            };

            const appendDeleteButton = (rowActions, keyId) => {
              rowActions.innerHTML = '';
              const deleteBtn = document.createElement('button');
              deleteBtn.type = 'button';
              deleteBtn.className = 'key-delete';
              deleteBtn.setAttribute('data-delete-key', keyId);
              deleteBtn.textContent = 'Delete';
              rowActions.append(deleteBtn);
            };

            const revealNewKey = (plainKey) => {
              if (keyReveal && keyRevealValue) {
                keyRevealValue.textContent = plainKey;
                keyReveal.hidden = false;
                if (keyRevealCopy) keyRevealCopy.setAttribute('data-copy-value', plainKey);
                keyReveal.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
              }
            };

            const markRowRevoked = (keyId) => {
              const row = keyList ? keyList.querySelector('[data-key-id="' + keyId + '"]') : null;
              if (!row) return;
              const status = row.querySelector('[data-key-status]');
              if (status) { status.textContent = 'Revoked'; status.className = 'key-status key-status-revoked'; }
              const rowActions = row.querySelector('.key-row-actions');
              if (rowActions) appendDeleteButton(rowActions, keyId);
            };

            if (expirationSelect && customDateWrap) {
              const syncCustom = () => {
                const isCustom = expirationSelect.value === 'custom';
                customDateWrap.hidden = !isCustom;
                if (expiryDateInput) expiryDateInput.required = isCustom;
              };
              expirationSelect.addEventListener('change', syncCustom);
              syncCustom();
            }

            if (createKeyForm && keyList) {
              createKeyForm.addEventListener('submit', async (event) => {
                event.preventDefault();
                if (createKeyError) { createKeyError.hidden = true; createKeyError.textContent = ''; }
                const submitBtn = createKeyForm.querySelector('[data-create-key-submit]');
                const formData = new FormData(createKeyForm);
                const payload = {
                  name: String(formData.get('name') || '').trim(),
                  expiration: String(formData.get('expiration') || 'never'),
                };
                if (payload.expiration === 'custom') {
                  payload.expiresAt = String(formData.get('expiresAt') || '');
                }
                if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Creating...'; }
                try {
                  const response = await fetch('/dashboard/api-keys', {
                    method: 'POST',
                    headers: csrfHeaders({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify(payload),
                  });
                  if (!response.ok) {
                    let message = 'Could not create the API key.';
                    try {
                      const errorBody = await response.json();
                      if (errorBody && errorBody.message) {
                        message = Array.isArray(errorBody.message) ? errorBody.message.join(' ') : errorBody.message;
                      }
                    } catch (ignored) {}
                    throw new Error(message);
                  }
                  const data = await response.json();
                  revealNewKey(data.plainKey);
                  const empty = keyList.querySelector('[data-key-empty]');
                  if (empty) empty.remove();
                  keyList.insertBefore(buildKeyRow(data.key), keyList.firstChild);
                  createKeyForm.reset();
                  if (expirationSelect && customDateWrap) {
                    customDateWrap.hidden = expirationSelect.value !== 'custom';
                  }
                } catch (error) {
                  if (createKeyError) {
                    createKeyError.hidden = true;
                    createKeyError.textContent = '';
                  }
                  await showAlertModal(
                    error && error.message ? error.message : 'Could not create the API key.',
                    { title: 'Unable to create key', tone: 'danger' },
                  );
                } finally {
                  if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Create API key'; }
                }
              });

              keyList.addEventListener('click', (event) => {
                const target = event.target;
                if (!target || !target.closest) return;

                const revokeBtn = target.closest('[data-revoke-key]');
                if (revokeBtn instanceof HTMLButtonElement) {
                  const keyId = revokeBtn.getAttribute('data-revoke-key');
                  if (!keyId || revokeBtn.disabled) return;
                  void (async () => {
                    const accepted = await showConfirmModal(
                      'Revoke this API key? Applications using it will stop working immediately.',
                      { title: 'Revoke API key', confirmLabel: 'Revoke key', tone: 'danger' },
                    );
                    if (!accepted) return;
                    revokeBtn.disabled = true;
                    revokeBtn.textContent = 'Revoking...';
                    await yieldToPaint();
                    try {
                      const response = await fetch('/dashboard/api-keys/' + encodeURIComponent(keyId) + '/revoke', {
                        method: 'POST',
                        headers: csrfHeaders(),
                      });
                      if (!response.ok) throw new Error('revoke failed');
                      markRowRevoked(keyId);
                    } catch (error) {
                      revokeBtn.disabled = false;
                      revokeBtn.textContent = 'Revoke';
                      await showAlertModal('Could not revoke the key. Please try again.', {
                        title: 'Unable to revoke key',
                        tone: 'danger',
                      });
                    }
                  })();
                  return;
                }

                const rotateBtn = target.closest('[data-rotate-key]');
                if (rotateBtn instanceof HTMLButtonElement) {
                  const keyId = rotateBtn.getAttribute('data-rotate-key');
                  if (!keyId || rotateBtn.disabled) return;
                  void (async () => {
                    const accepted = await showConfirmModal(
                      'Rotate this key? A new key is issued and this one is revoked immediately.',
                      { title: 'Rotate API key', confirmLabel: 'Rotate key', tone: 'danger' },
                    );
                    if (!accepted) return;
                    rotateBtn.disabled = true;
                    rotateBtn.textContent = 'Rotating...';
                    await yieldToPaint();
                    try {
                      const response = await fetch('/dashboard/api-keys/' + encodeURIComponent(keyId) + '/rotate', {
                        method: 'POST',
                        headers: csrfHeaders(),
                      });
                      if (!response.ok) throw new Error('rotate failed');
                      const data = await response.json();
                      revealNewKey(data.plainKey);
                      markRowRevoked(keyId);
                      keyList.insertBefore(buildKeyRow(data.view || data.key), keyList.firstChild);
                    } catch (error) {
                      rotateBtn.disabled = false;
                      rotateBtn.textContent = 'Rotate';
                      await showAlertModal('Could not rotate the key. Please try again.', {
                        title: 'Unable to rotate key',
                        tone: 'danger',
                      });
                    }
                  })();
                  return;
                }

                const deleteBtn = target.closest('[data-delete-key]');
                if (deleteBtn instanceof HTMLButtonElement) {
                  const keyId = deleteBtn.getAttribute('data-delete-key');
                  if (!keyId || deleteBtn.disabled) return;
                  void (async () => {
                    const accepted = await showConfirmModal(
                      'Permanently delete this revoked API key from your account?',
                      { title: 'Delete API key', confirmLabel: 'Delete key', tone: 'danger' },
                    );
                    if (!accepted) return;
                    deleteBtn.disabled = true;
                    deleteBtn.textContent = 'Deleting...';
                    await yieldToPaint();
                    try {
                      const response = await fetch('/dashboard/api-keys/' + encodeURIComponent(keyId), {
                        method: 'DELETE',
                        headers: csrfHeaders(),
                      });
                      if (!response.ok) throw new Error('delete failed');
                      const row = keyList.querySelector('[data-key-id="' + keyId + '"]');
                      if (row) row.remove();
                      if (!keyList.querySelector('.key-row')) {
                        const empty = document.createElement('p');
                        empty.className = 'key-empty';
                        empty.setAttribute('data-key-empty', '');
                        empty.textContent = 'No live API keys yet. Create one below to authenticate production requests.';
                        keyList.append(empty);
                      }
                    } catch (error) {
                      deleteBtn.disabled = false;
                      deleteBtn.textContent = 'Delete';
                      await showAlertModal('Could not delete the key. Please try again.', {
                        title: 'Unable to delete key',
                        tone: 'danger',
                      });
                    }
                  })();
                }
              });
            }

            if (regenerateTestKeyBtn instanceof HTMLButtonElement) {
              regenerateTestKeyBtn.addEventListener('click', async () => {
                const accepted = await showConfirmModal(
                  'Regenerate your development test key? The previous test key stops working immediately.',
                  { title: 'Regenerate test key', confirmLabel: 'Regenerate', tone: 'danger' },
                );
                if (!accepted) return;
                regenerateTestKeyBtn.disabled = true;
                const originalLabel = regenerateTestKeyBtn.textContent;
                regenerateTestKeyBtn.textContent = 'Regenerating...';
                try {
                  const response = await fetch('/dashboard/api-keys/test/regenerate', {
                    method: 'POST',
                    headers: csrfHeaders(),
                  });
                  if (!response.ok) throw new Error('regenerate failed');
                  const data = await response.json();
                  const valueNode = document.querySelector('[data-test-key-value]');
                  const panel = document.querySelector('.test-key-panel');
                  if (valueNode && data.plainKey) {
                    valueNode.textContent = data.plainKey;
                    let copyBtn = panel ? panel.querySelector('[data-test-key-copy]') : null;
                    if (!copyBtn && panel) {
                      copyBtn = document.createElement('button');
                      copyBtn.type = 'button';
                      copyBtn.className = 'button secondary';
                      copyBtn.setAttribute('data-test-key-copy', '');
                      copyBtn.textContent = 'Copy';
                      const wrap = valueNode.parentElement;
                      if (wrap) wrap.append(copyBtn);
                    }
                    if (copyBtn instanceof HTMLButtonElement) {
                      copyBtn.setAttribute('data-copy-value', data.plainKey);
                    }
                  }
                  await showAlertModal('Copy your new test key now. It will not be shown again after you leave this page.', {
                    title: 'Test key regenerated',
                  });
                } catch (error) {
                  await showAlertModal('Could not regenerate the test key. Please try again.', {
                    title: 'Unable to regenerate',
                    tone: 'danger',
                  });
                } finally {
                  regenerateTestKeyBtn.disabled = false;
                  regenerateTestKeyBtn.textContent = originalLabel || 'Regenerate test key';
                }
              });
            }

            const copyButtons = document.querySelectorAll('[data-key-reveal-copy], [data-test-key-copy]');
            copyButtons.forEach((button) => {
              if (!(button instanceof HTMLButtonElement)) return;
              button.addEventListener('click', async () => {
                const value = button.getAttribute('data-copy-value')
                  || (keyRevealValue ? keyRevealValue.textContent : '')
                  || '';
                if (!value) return;
                await navigator.clipboard.writeText(value);
                const original = button.textContent;
                button.textContent = 'Copied';
                window.setTimeout(() => { button.textContent = original; }, 1200);
              });
            });
  `;
}
