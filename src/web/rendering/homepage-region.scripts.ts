import { serializeHomepageEsDictionary } from '../i18n/homepage-es';

export function renderHomepageRegionScripts(): string {
  const esDictionaryJson = serializeHomepageEsDictionary();

  return `
            const REGION_STORAGE_KEY = 'telvri_region';
            const HOMEPAGE_ES = ${esDictionaryJson};
            const SUPPORTED_REGIONS = ['US','AU','BR','CA','FR','DE','IN','JP','KR','MX','NL','SG','ES','SE','GB'];
            const regionSelect = document.querySelector('[data-region-select]');

            const captureEnglishDefaults = () => {
              document.querySelectorAll('[data-i18n]').forEach((el) => {
                if (!el.getAttribute('data-i18n-en')) {
                  el.setAttribute('data-i18n-en', el.textContent || '');
                }
              });
              document.querySelectorAll('[data-i18n-html]').forEach((el) => {
                if (!el.getAttribute('data-i18n-en-html')) {
                  el.setAttribute('data-i18n-en-html', el.innerHTML);
                }
              });
              document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
                if (!el.getAttribute('data-i18n-en-aria')) {
                  el.setAttribute('data-i18n-en-aria', el.getAttribute('aria-label') || '');
                }
              });
            };

            const applyHomepageLanguage = (regionCode) => {
              const useSpanish = regionCode === 'ES';
              document.documentElement.lang = useSpanish ? 'es' : 'en';
              document.body.classList.toggle('is-locale-es', useSpanish);

              document.querySelectorAll('[data-i18n]').forEach((el) => {
                const key = el.getAttribute('data-i18n');
                if (!key) return;
                if (useSpanish && HOMEPAGE_ES[key]) {
                  el.textContent = HOMEPAGE_ES[key];
                } else {
                  el.textContent = el.getAttribute('data-i18n-en') || el.textContent;
                }
              });

              document.querySelectorAll('[data-i18n-html]').forEach((el) => {
                const key = el.getAttribute('data-i18n-html');
                if (!key) return;
                if (useSpanish && HOMEPAGE_ES[key]) {
                  el.innerHTML = HOMEPAGE_ES[key];
                } else {
                  el.innerHTML = el.getAttribute('data-i18n-en-html') || el.innerHTML;
                }
              });

              document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
                const key = el.getAttribute('data-i18n-aria');
                if (!key) return;
                if (useSpanish && HOMEPAGE_ES[key]) {
                  el.setAttribute('aria-label', HOMEPAGE_ES[key]);
                } else {
                  const original = el.getAttribute('data-i18n-en-aria');
                  if (original) el.setAttribute('aria-label', original);
                }
              });
            };

            const setRegion = (regionCode, persist) => {
              const code = SUPPORTED_REGIONS.includes(regionCode) ? regionCode : 'US';
              if (regionSelect) regionSelect.value = code;
              if (persist) {
                try { localStorage.setItem(REGION_STORAGE_KEY, code); } catch (ignored) {}
              }
              applyHomepageLanguage(code);
            };

            const detectRegionFromLocale = () => {
              const language = (navigator.language || navigator.languages && navigator.languages[0] || 'en-US').toLowerCase();
              if (language.startsWith('es')) return 'ES';
              if (language.startsWith('fr')) return 'FR';
              if (language.startsWith('de')) return 'DE';
              if (language.startsWith('ja')) return 'JP';
              if (language.startsWith('ko')) return 'KR';
              if (language.startsWith('pt')) return 'BR';
              if (language.startsWith('sv')) return 'SE';
              if (language.startsWith('nl')) return 'NL';
              if (language === 'en-gb' || language === 'en-au') return language.slice(3).toUpperCase();
              try {
                const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
                if (timeZone === 'Europe/Madrid' || timeZone === 'Atlantic/Canary') return 'ES';
                if (timeZone.startsWith('Europe/London')) return 'GB';
                if (timeZone.startsWith('Australia/')) return 'AU';
                if (timeZone.startsWith('America/Mexico')) return 'MX';
                if (timeZone.startsWith('America/Sao_Paulo') || timeZone.startsWith('America/Fortaleza')) return 'BR';
                if (timeZone.startsWith('Asia/Tokyo')) return 'JP';
                if (timeZone.startsWith('Asia/Seoul')) return 'KR';
                if (timeZone.startsWith('Asia/Singapore')) return 'SG';
                if (timeZone.startsWith('Asia/Kolkata') || timeZone.startsWith('Asia/Calcutta')) return 'IN';
                if (timeZone.startsWith('Europe/Paris')) return 'FR';
                if (timeZone.startsWith('Europe/Berlin')) return 'DE';
                if (timeZone.startsWith('Europe/Amsterdam')) return 'NL';
                if (timeZone.startsWith('Europe/Stockholm')) return 'SE';
                if (timeZone.startsWith('America/Toronto') || timeZone.startsWith('America/Vancouver')) return 'CA';
              } catch (ignored) {}
              return 'US';
            };

            const detectRegionFromIp = async () => {
              const controller = new AbortController();
              const timer = window.setTimeout(() => controller.abort(), 2500);
              try {
                const response = await fetch('https://ipapi.co/json/', { signal: controller.signal });
                if (!response.ok) throw new Error('ip lookup failed');
                const data = await response.json();
                const code = String(data && data.country_code ? data.country_code : '').toUpperCase();
                if (SUPPORTED_REGIONS.includes(code)) return code;
              } catch (ignored) {
              } finally {
                window.clearTimeout(timer);
              }
              return null;
            };

            const bootstrapRegion = async () => {
              captureEnglishDefaults();
              let saved = null;
              try { saved = localStorage.getItem(REGION_STORAGE_KEY); } catch (ignored) {}
              if (saved && SUPPORTED_REGIONS.includes(saved)) {
                setRegion(saved, false);
                return;
              }
              const fromIp = await detectRegionFromIp();
              setRegion(fromIp || detectRegionFromLocale(), true);
            };

            if (regionSelect) {
              regionSelect.addEventListener('change', () => {
                setRegion(regionSelect.value, true);
              });
            }

            if (document.querySelector('.landing-shell')) {
              bootstrapRegion();
            }
  `;
}
