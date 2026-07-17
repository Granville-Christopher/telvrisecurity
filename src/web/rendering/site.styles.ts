export function renderSiteStyles(): string {
  return "            :root {\n              color-scheme: light;\n              --ink: #0a0a0f;\n              --muted: #6e6a78;\n              --line: #e5e0ef;\n              --surface: #ffffff;\n              --soft: #f5f3fa;\n              --accent: #7c3aed;\n              --accent-dark: #5b21b6;\n              --danger: #d64545;\n              --gold: #9f7aea;\n              --purple: #3d2460;\n              --purple-light: #a78bfa;\n              --purple-glow: #c4b5fd;\n            }\n\n            * {\n              box-sizing: border-box;\n            }\n\n            body {\n              margin: 0;\n              min-height: 100vh;\n              color: var(--ink);\n              background: var(--soft);\n              font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n            }\n\n            a {\n              color: inherit;\n              text-decoration: none;\n            }\n\n            code,\n            pre {\n              font-family: \"SFMono-Regular\", Consolas, \"Liberation Mono\", monospace;\n            }\n\n            .landing-shell {\n              min-height: 100vh;\n              color: var(--ink);\n              background: var(--soft);\n              overflow-x: clip;\n            }\n\n            .landing-shell .brand-mark {\n              color: #0a0a0f;\n              background: var(--purple-glow);\n              box-shadow: 0 0 32px rgba(167,139,250,0.34);\n            }\n\n            .navbar-shell {\n              position: fixed;\n              top: 58px;\n              left: 50%;\n              z-index: 7;\n              width: min(calc(100% - 80px), 1320px);\n              max-width: 1320px;\n              transform: translateX(-50%);\n              display: flex;\n              align-items: center;\n              justify-content: space-between;\n              gap: 28px;\n            }\n\n            .navbar-toggle {\n              display: none;\n              flex-direction: column;\n              justify-content: center;\n              gap: 5px;\n              width: 44px;\n              height: 44px;\n              padding: 0;\n              border: 1px solid rgba(167,139,250,0.28);\n              border-radius: 12px;\n              color: #fff;\n              background: rgba(10, 8, 15, 0.82);\n              cursor: pointer;\n              backdrop-filter: blur(12px);\n            }\n\n            .navbar-toggle-bar {\n              display: block;\n              width: 18px;\n              height: 2px;\n              margin: 0 auto;\n              border-radius: 999px;\n              background: currentColor;\n              transition: transform 180ms ease, opacity 180ms ease;\n            }\n\n            .navbar-shell.is-open .navbar-toggle-bar:nth-child(1) {\n              transform: translateY(7px) rotate(45deg);\n            }\n\n            .navbar-shell.is-open .navbar-toggle-bar:nth-child(2) {\n              opacity: 0;\n            }\n\n            .navbar-shell.is-open .navbar-toggle-bar:nth-child(3) {\n              transform: translateY(-7px) rotate(-45deg);\n            }\n\n            .brand-logo {\n              display: inline-flex;\n              align-items: center;\n              flex: 0 0 auto;\n            }\n\n            .brand-logo img {\n              display: block;\n              height: 64px;\n              width: auto;\n              max-width: min(280px, 48vw);\n              object-fit: contain;\n              transition: height 180ms ease, max-width 180ms ease;\n            }\n\n            .navbar-shell.is-over-hero .brand-logo img {\n              height: 82px;\n              max-width: min(320px, 52vw);\n            }\n\n            .site-footer .brand-logo img {\n              height: 56px;\n              max-width: min(240px, 56vw);\n            }\n\n            @media (min-width: 640px) {\n              .brand-logo img {\n                height: 76px;\n              }\n\n              .navbar-shell.is-over-hero .brand-logo img {\n                height: 98px;\n              }\n\n              .site-footer .brand-logo img {\n                height: 68px;\n              }\n            }\n\n            @media (min-width: 768px) {\n              .brand-logo img {\n                height: 88px;\n              }\n\n              .navbar-shell.is-over-hero .brand-logo img {\n                height: 100px;\n              }\n\n              .site-footer .brand-logo img {\n                height: 78px;\n              }\n            }\n\n            .homepage-brand-logo {\n              background: transparent;\n              box-shadow: none;\n              padding: 0;\n            }\n\n            .navbar-shell.is-over-hero .homepage-brand-logo {\n              background: transparent;\n              box-shadow: none;\n            }\n\n            .nav-pill {\n              display: flex;\n              align-items: center;\n              flex: 0 1 auto;\n              padding: 6px 8px 6px 18px;\n              color: #fff;\n              background: rgba(10, 8, 15, 0.72);\n              border: 1px solid rgba(167,139,250,0.22);\n              border-radius: 999px;\n              backdrop-filter: blur(14px);\n              box-shadow: 0 18px 60px rgba(10,8,15,0.38);\n            }\n\n            .topbar {\n              display: flex;\n              align-items: center;\n              justify-content: space-between;\n              max-width: 1320px;\n              margin: 0 auto;\n              padding: 22px 32px;\n            }\n\n            .homepage-utility-bar {\n              position: fixed;\n              top: 0;\n              left: 0;\n              right: 0;\n              z-index: 8;\n              display: flex;\n              align-items: center;\n              justify-content: space-between;\n              gap: 40px;\n              min-height: 42px;\n              padding: 0 40px;\n              color: #ede9fe;\n              background: rgba(10, 8, 15, 0.96);\n              border-bottom: 1px solid rgba(167,139,250,0.14);\n              font-size: 0.86rem;\n              backdrop-filter: blur(16px);\n            }\n\n            .homepage-utility-bar a {\n              color: #fff;\n              font-weight: 800;\n            }\n\n            .utility-announcement,\n            .utility-links {\n              display: flex;\n              align-items: center;\n              gap: 14px;\n              min-width: 0;\n            }\n\n            .utility-announcement {\n              overflow: hidden;\n            }\n\n            .utility-announcement a:first-child {\n              overflow: hidden;\n              text-overflow: ellipsis;\n              white-space: nowrap;\n            }\n\n            .utility-strong {\n              color: var(--purple-light) !important;\n            }\n\n            .utility-links {\n              color: rgba(248,253,255,0.68);\n              flex: 0 0 auto;\n            }\n\n            .utility-phone {\n              display: inline-flex;\n              align-items: center;\n              gap: 8px;\n            }\n\n            .utility-phone span:first-child {\n              display: inline-grid;\n              width: 20px;\n              height: 20px;\n              place-items: center;\n              border: 1px solid rgba(167,139,250,0.28);\n              border-radius: 999px;\n              color: #a78bfa;\n              font-size: 0.74rem;\n            }\n\n            .utility-phone svg {\n              width: 13px;\n              height: 13px;\n              fill: none;\n              stroke: currentColor;\n              stroke-width: 2;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n            }\n\n            .country-select {\n              display: inline-flex;\n              align-items: center;\n              gap: 8px;\n              color: rgba(248,253,255,0.68);\n              font-weight: 700;\n            }\n\n            .country-select select {\n              min-height: 28px;\n              max-width: 190px;\n              padding: 0 30px 0 10px;\n              border: 1px solid rgba(167,139,250,0.24);\n              border-radius: 999px;\n              color: #fff;\n              background: rgba(255,255,255,0.08);\n              font: inherit;\n              font-size: 0.84rem;\n            }\n\n            .country-select option {\n              color: var(--ink);\n              background: #fff;\n            }\n\n            .brand {\n              display: inline-flex;\n              align-items: center;\n              gap: 10px;\n              font-weight: 800;\n            }\n\n            .brand-mark {\n              display: inline-grid;\n              width: 34px;\n              height: 34px;\n              place-items: center;\n              border-radius: 8px;\n              color: white;\n              background: var(--ink);\n            }\n\n            .nav-actions {\n              display: flex;\n              align-items: center;\n              gap: 14px;\n              color: rgba(248,253,255,0.72);\n              font-size: 0.8125rem;\n              font-weight: 600;\n            }\n\n            .nav-pill .button {\n              min-height: 32px;\n              padding: 0 14px;\n              font-size: 0.8125rem;\n              font-weight: 650;\n              border-radius: 999px;\n            }\n\n            .nav-pill .nav-actions a:not(.button) {\n              color: rgba(248,253,255,0.82);\n            }\n\n            .nav-pill .nav-actions a:not(.button):hover {\n              color: #fff;\n            }\n\n            .button,\n            button {\n              display: inline-flex;\n              align-items: center;\n              justify-content: center;\n              min-height: 42px;\n              padding: 0 16px;\n              border: 1px solid transparent;\n              border-radius: 8px;\n              font: inherit;\n              font-weight: 750;\n              cursor: pointer;\n            }\n\n            .button.primary {\n              color: #fff;\n              background: var(--accent);\n            }\n\n            .button.primary:hover {\n              background: var(--accent-dark);\n            }\n\n            .button.secondary,\n            .button.ghost {\n              color: var(--ink);\n              background: var(--surface);\n              border-color: var(--line);\n            }\n\n            .landing-shell .button.secondary,\n            .landing-shell .button.ghost {\n              color: #f8fdff;\n              background: rgba(255,255,255,0.08);\n              border-color: rgba(255,255,255,0.18);\n            }\n\n            .hero {\n              display: grid;\n              grid-template-columns: minmax(0, 1.08fr) minmax(440px, 0.92fr);\n              gap: 64px;\n              align-items: center;\n              max-width: 1320px;\n              min-height: calc(100vh - 126px);\n              margin: 0 auto;\n              padding: 26px 32px 78px;\n            }\n\n            .homepage-hero-image {\n              position: relative;\n              display: flex;\n              align-items: flex-end;\n              max-width: none;\n              min-height: calc(100vh - 58px);\n              margin: 0;\n              padding: 140px 32px 96px;\n              isolation: isolate;\n              background:\n                linear-gradient(90deg, rgba(8,6,14,0.94) 0%, rgba(61,36,96,0.58) 38%, rgba(8,6,14,0.18) 72%),\n                linear-gradient(180deg, rgba(8,6,14,0.12) 0%, rgba(8,6,14,0.9) 100%),\n                url(\"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&q=80\");\n              background-position: center;\n              background-size: cover;\n              overflow: hidden;\n            }\n\n            .homepage-hero-image::before,\n            .homepage-hero-image::after {\n              content: \"\";\n              position: absolute;\n              inset: 0;\n              z-index: -1;\n              pointer-events: none;\n            }\n\n            .homepage-hero-image::before {\n              background:\n                repeating-linear-gradient(90deg, rgba(167,139,250,0.08) 0, rgba(167,139,250,0.08) 1px, transparent 1px, transparent 96px),\n                repeating-linear-gradient(0deg, rgba(167,139,250,0.06) 0, rgba(167,139,250,0.06) 1px, transparent 1px, transparent 96px);\n              opacity: 0.42;\n              animation: gridDrift 18s linear infinite;\n            }\n\n            .homepage-hero-image::after {\n              background: radial-gradient(circle at 78% 22%, rgba(124,58,237,0.28), transparent 32%);\n              animation: pulseGlow 5s ease-in-out infinite;\n            }\n\n            @keyframes gridDrift {\n              from { transform: translate3d(0, 0, 0); }\n              to { transform: translate3d(-96px, 0, 0); }\n            }\n\n            @keyframes pulseGlow {\n              0%, 100% { opacity: 0.56; }\n              50% { opacity: 0.9; }\n            }\n\n            .homepage-hero-copy {\n              width: min(720px, 100%);\n              margin-left: max(0px, calc((100vw - 1320px) / 2));\n              text-align: left;\n            }\n\n            .homepage-hero-copy.reveal-up {\n              transform: translateX(-42px);\n              animation: heroSlideIn 1.05s cubic-bezier(0.16, 1, 0.3, 1) 0.28s forwards;\n            }\n\n            .eyebrow {\n              margin: 0 0 14px;\n              color: var(--purple-light);\n              font-size: 0.78rem;\n              font-weight: 850;\n              text-transform: uppercase;\n              letter-spacing: 0;\n            }\n\n            h1 {\n              max-width: 760px;\n              margin: 0;\n              font-size: clamp(2.6rem, 7vw, 5.7rem);\n              line-height: 0.94;\n            }\n\n            .homepage-hero-copy h1 {\n              display: grid;\n              gap: 6px;\n              max-width: 640px;\n              font-size: clamp(1.4rem, 2.4vw, 2.35rem);\n              line-height: 1.12;\n              font-weight: 600;\n              letter-spacing: -0.02em;\n            }\n\n            .homepage-hero-copy h1 span {\n              color: rgba(248,253,255,0.82);\n              font-weight: 500;\n              font-size: 0.94em;\n            }\n\n            .homepage-hero-copy h1 strong {\n              color: #fff;\n              font-weight: 700;\n            }\n\n            .lede {\n              max-width: 620px;\n              margin: 24px 0 0;\n              color: rgba(248,253,255,0.72);\n              font-size: 1.17rem;\n              line-height: 1.65;\n            }\n\n            .homepage-hero-copy .lede {\n              max-width: 600px;\n              margin-top: 18px;\n              font-size: 1rem;\n            }\n\n            .reveal-up {\n              opacity: 0;\n              transform: translateY(24px);\n              transition: opacity 700ms ease, transform 700ms ease;\n            }\n\n            .reveal-up.is-visible {\n              opacity: 1;\n              transform: translateY(0);\n            }\n\n            @keyframes revealUp {\n              to {\n                opacity: 1;\n                transform: translateY(0);\n              }\n            }\n\n            @keyframes heroSlideIn {\n              to {\n                opacity: 1;\n                transform: translateX(0);\n              }\n            }\n\n            .hero-actions {\n              display: flex;\n              flex-wrap: wrap;\n              gap: 12px;\n              margin-top: 28px;\n            }\n\n            .homepage-hero-copy .hero-actions .button.secondary {\n              color: #f8fdff;\n              background: rgba(255,255,255,0.08);\n              border-color: rgba(255,255,255,0.2);\n            }\n\n            .homepage-hero-copy .hero-actions .button.secondary:hover {\n              background: rgba(255,255,255,0.14);\n              border-color: rgba(255,255,255,0.3);\n            }\n\n            .hero-metrics {\n              display: grid;\n              grid-template-columns: repeat(3, minmax(0, 1fr));\n              gap: 12px;\n              max-width: 620px;\n              margin-top: 34px;\n            }\n\n            .hero-metrics div {\n              padding: 16px;\n              border: 1px solid rgba(167,139,250,0.2);\n              border-radius: 8px;\n              background: rgba(255,255,255,0.07);\n              box-shadow: 0 14px 35px rgba(0,0,0,0.18);\n            }\n\n            .hero-metrics strong,\n            .hero-metrics span {\n              display: block;\n            }\n\n            .hero-metrics strong {\n              font-size: 1.55rem;\n              line-height: 1;\n            }\n\n            .hero-metrics span {\n              margin-top: 8px;\n              color: rgba(248,253,255,0.62);\n              font-size: 0.86rem;\n              line-height: 1.35;\n            }\n\n            .signal-visual {\n              position: relative;\n              min-height: 590px;\n              overflow: hidden;\n              border: 1px solid rgba(167,139,250,0.22);\n              border-radius: 8px;\n              background:\n                linear-gradient(135deg, rgba(3, 13, 20, 0.96), rgba(7, 54, 64, 0.92)),\n                repeating-linear-gradient(0deg, rgba(167,139,250,0.08) 0, rgba(167,139,250,0.08) 1px, transparent 1px, transparent 32px),\n                repeating-linear-gradient(90deg, rgba(167,139,250,0.05) 0, rgba(167,139,250,0.05) 1px, transparent 1px, transparent 32px);\n              box-shadow: 0 28px 90px rgba(0,0,0,0.34), 0 0 80px rgba(91,52,137,0.18);\n            }\n\n            .terminal-window {\n              position: absolute;\n              top: 76px;\n              right: 28px;\n              left: 28px;\n              overflow: hidden;\n              border: 1px solid rgba(255,255,255,0.16);\n              border-radius: 8px;\n              background: rgba(5, 18, 24, 0.82);\n              color: #ede9fe;\n              box-shadow: 0 18px 50px rgba(0,0,0,0.26);\n            }\n\n            .terminal-bar {\n              display: flex;\n              gap: 7px;\n              padding: 12px 14px;\n              border-bottom: 1px solid rgba(255,255,255,0.1);\n              background: rgba(255,255,255,0.06);\n            }\n\n            .terminal-bar span {\n              width: 10px;\n              height: 10px;\n              border-radius: 999px;\n              background: #c4b5fd;\n            }\n\n            .terminal-bar span:nth-child(2) {\n              background: var(--gold);\n            }\n\n            .terminal-bar span:nth-child(3) {\n              background: #ffb3b3;\n            }\n\n            .terminal-window pre {\n              color: #ede9fe;\n              background: transparent;\n              border-radius: 0;\n            }\n\n            .scan-line {\n              position: absolute;\n              inset: 0;\n              background: linear-gradient(180deg, transparent 0%, rgba(124,58,237,0.22) 52%, transparent 54%);\n              animation: scan 5s linear infinite;\n            }\n\n            .threat-header {\n              position: absolute;\n              top: 18px;\n              right: 18px;\n              left: 18px;\n              z-index: 2;\n              display: flex;\n              justify-content: space-between;\n              gap: 14px;\n              padding: 12px 14px;\n              border: 1px solid rgba(255,255,255,0.12);\n              border-radius: 8px;\n              color: rgba(248,253,255,0.72);\n              background: rgba(0,0,0,0.24);\n              backdrop-filter: blur(10px);\n              font-size: 0.78rem;\n              font-weight: 850;\n            }\n\n            .threat-header b {\n              color: #ffb3b3;\n            }\n\n            @keyframes scan {\n              from { transform: translateY(-100%); }\n              to { transform: translateY(100%); }\n            }\n\n            .network-map {\n              position: absolute;\n              inset: 42px;\n            }\n\n            .tower {\n              position: absolute;\n              width: 22px;\n              height: 22px;\n              border: 3px solid #c4b5fd;\n              border-radius: 50%;\n              box-shadow: 0 0 0 12px rgba(167,139,250,0.1), 0 0 0 28px rgba(167,139,250,0.05);\n            }\n\n            .tower-a { left: 12%; top: 18%; }\n            .tower-b { right: 12%; top: 28%; }\n            .tower-c { left: 44%; bottom: 22%; }\n            .tower.threat {\n              border-color: #ffb3b3;\n              box-shadow: 0 0 0 12px rgba(214,69,69,0.18), 0 0 0 28px rgba(214,69,69,0.08);\n            }\n\n            .path {\n              position: absolute;\n              height: 2px;\n              background: linear-gradient(90deg, rgba(167,139,250,0.12), rgba(167,139,250,0.7));\n              transform-origin: left center;\n            }\n\n            .path-one {\n              left: 18%;\n              top: 23%;\n              width: 252px;\n              transform: rotate(13deg);\n            }\n\n            .path-two {\n              left: 48%;\n              top: 38%;\n              width: 190px;\n              transform: rotate(114deg);\n            }\n\n            .risk-card {\n              position: absolute;\n              right: 24px;\n              bottom: 24px;\n              left: 24px;\n              padding: 22px;\n              border: 1px solid rgba(255,179,179,0.32);\n              border-radius: 8px;\n              color: white;\n              background: rgba(16, 24, 32, 0.84);\n              backdrop-filter: blur(10px);\n            }\n\n            .risk-label {\n              display: block;\n              margin-bottom: 8px;\n              color: #c4b5fd;\n              font-size: 0.78rem;\n              font-weight: 850;\n            }\n\n            .risk-card strong {\n              display: block;\n              font-size: 1.45rem;\n              margin-bottom: 18px;\n              overflow-wrap: anywhere;\n            }\n\n            .risk-row {\n              display: flex;\n              justify-content: space-between;\n              gap: 12px;\n              padding-top: 12px;\n              color: rgba(255,255,255,0.76);\n            }\n\n            .risk-row b {\n              color: #fff;\n            }\n\n            .trust-strip {\n              display: grid;\n              grid-template-columns: repeat(5, minmax(0, 1fr));\n              gap: 1px;\n              max-width: 1320px;\n              margin: 0 auto;\n              padding: 40px 32px 56px;\n              background: var(--soft);\n            }\n\n            .trust-strip span {\n              display: grid;\n              min-height: 64px;\n              place-items: center;\n              padding: 14px;\n              border: 1px solid rgba(91,52,137,0.14);\n              border-radius: 8px;\n              color: var(--ink);\n              background: #fff;\n              box-shadow: 0 10px 28px rgba(16,24,32,0.04);\n              font-weight: 800;\n              text-align: center;\n            }\n\n            .feature-band {\n              display: grid;\n              grid-template-columns: repeat(3, 1fr);\n              gap: 1px;\n              max-width: 1320px;\n              margin: 0 auto;\n              padding: 0 32px 64px;\n            }\n\n            .feature-band article {\n              min-height: 158px;\n              padding: 24px;\n              color: var(--ink);\n              background:\n                linear-gradient(180deg, rgba(255,255,255,0.98), rgba(244,248,251,0.98)),\n                var(--surface);\n              border: 1px solid rgba(91,52,137,0.16);\n              box-shadow: 0 14px 35px rgba(16,24,32,0.05);\n              transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;\n            }\n\n            .card-media {\n              height: 118px;\n              margin: -4px -4px 18px;\n              border-radius: 8px;\n              border: 1px solid rgba(91,52,137,0.12);\n              background:\n                linear-gradient(135deg, rgba(5,16,24,0.92), rgba(91,52,137,0.55)),\n                url(\"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80\");\n              background-position: center;\n              background-size: cover;\n              position: relative;\n              overflow: hidden;\n            }\n\n            .card-media::after {\n              content: \"\";\n              position: absolute;\n              inset: 0;\n              background:\n                repeating-linear-gradient(90deg, rgba(167,139,250,0.13) 0, rgba(167,139,250,0.13) 1px, transparent 1px, transparent 42px),\n                linear-gradient(180deg, transparent, rgba(5,16,24,0.55));\n              opacity: 0.78;\n              transition: transform 350ms ease;\n            }\n\n            article:hover .card-media::after {\n              transform: translateX(22px);\n            }\n\n            .media-endpoint { background-image: linear-gradient(135deg, rgba(5,16,24,0.92), rgba(91,52,137,0.55)), url(\"https://images.unsplash.com/photo-1643962578248-71e90f8d14f3?auto=format&fit=crop&w=900&q=80\"); }\n            .media-auth { background-image: linear-gradient(135deg, rgba(5,16,24,0.92), rgba(91,52,137,0.55)), url(\"https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=900&q=80\"); }\n            .media-openapi { background-image: linear-gradient(135deg, rgba(5,16,24,0.92), rgba(91,52,137,0.55)), url(\"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80\"); }\n            .media-threat { background-image: linear-gradient(135deg, rgba(5,16,24,0.92), rgba(214,69,69,0.48)), url(\"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80\"); }\n            .media-control { background-image: linear-gradient(135deg, rgba(5,16,24,0.92), rgba(91,52,137,0.55)), url(\"https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=900&q=80\"); }\n            .media-contract { background-image: linear-gradient(135deg, rgba(5,16,24,0.92), rgba(91,52,137,0.55)), url(\"https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80\"); }\n            .media-decision { background-image: linear-gradient(135deg, rgba(5,16,24,0.92), rgba(224,167,46,0.42)), url(\"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80\"); }\n            .media-recovery { background-image: linear-gradient(135deg, rgba(5,16,24,0.92), rgba(91,52,137,0.55)), url(\"https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80\"); }\n            .media-wallet { background-image: linear-gradient(135deg, rgba(5,16,24,0.92), rgba(91,52,137,0.55)), url(\"https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80\"); }\n            .media-payee { background-image: linear-gradient(135deg, rgba(5,16,24,0.92), rgba(91,52,137,0.55)), url(\"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80\"); }\n            .media-onboarding { background-image: linear-gradient(135deg, rgba(5,16,24,0.92), rgba(91,52,137,0.55)), url(\"https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80\"); }\n            .media-article { background-image: linear-gradient(135deg, rgba(5,16,24,0.92), rgba(91,52,137,0.55)), url(\"https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=900&q=80\"); }\n            .media-incident { background-image: linear-gradient(135deg, rgba(5,16,24,0.92), rgba(214,69,69,0.5)), url(\"https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=900&q=80\"); }\n            .media-video { background-image: linear-gradient(135deg, rgba(5,16,24,0.92), rgba(91,52,137,0.55)), url(\"https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80\"); }\n            .media-research { background-image: linear-gradient(135deg, rgba(5,16,24,0.92), rgba(224,167,46,0.42)), url(\"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80\"); }\n\n            .platform-showcase {\n              max-width: 1320px;\n              margin: 0 auto;\n              padding: 18px 32px 78px;\n            }\n\n            .platform-header {\n              margin-bottom: 32px;\n            }\n\n            .platform-tabs {\n              display: flex;\n              flex-wrap: wrap;\n              gap: 12px;\n              margin-bottom: 28px;\n            }\n\n            .platform-tab {\n              display: inline-flex;\n              align-items: center;\n              gap: 12px;\n              min-height: 54px;\n              padding: 0 18px;\n              color: var(--muted);\n              background: #fff;\n              border: 1px solid rgba(91,52,137,0.16);\n              border-radius: 999px;\n              box-shadow: 0 10px 28px rgba(16,24,32,0.04);\n              transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease, background 180ms ease, color 180ms ease;\n            }\n\n            .platform-tab em {\n              display: inline-flex;\n              align-items: center;\n              justify-content: center;\n              min-width: 34px;\n              height: 34px;\n              color: var(--gold);\n              font-style: normal;\n              font-weight: 900;\n              border-radius: 999px;\n              background: rgba(224,167,46,0.12);\n            }\n\n            .platform-tab span {\n              font-weight: 750;\n            }\n\n            .platform-tab:hover {\n              transform: translateY(-2px);\n              border-color: rgba(91,52,137,0.28);\n              box-shadow: 0 16px 36px rgba(16,24,32,0.08);\n            }\n\n            .platform-tab.active {\n              color: #fff;\n              background: var(--ink);\n              border-color: var(--ink);\n              box-shadow: 0 16px 40px rgba(91,52,137,0.2);\n            }\n\n            .platform-tab.active em {\n              color: #fff;\n              background: rgba(255,255,255,0.14);\n            }\n\n            .platform-stage {\n              position: relative;\n              min-height: 520px;\n            }\n\n            .platform-panel {\n              display: none;\n              grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);\n              gap: 0;\n              overflow: hidden;\n              border: 1px solid rgba(91,52,137,0.16);\n              border-radius: 16px;\n              background: #fff;\n              box-shadow: 0 24px 70px rgba(16,24,32,0.08);\n            }\n\n            .platform-panel.active {\n              display: grid;\n              animation: platformPanelIn 420ms ease;\n            }\n\n            @keyframes platformPanelIn {\n              from {\n                opacity: 0;\n                transform: translateY(14px);\n              }\n              to {\n                opacity: 1;\n                transform: translateY(0);\n              }\n            }\n\n            .platform-visual {\n              position: relative;\n              min-height: 420px;\n              margin: 0;\n              overflow: hidden;\n              background: var(--ink);\n            }\n\n            .platform-visual img {\n              width: 100%;\n              height: 100%;\n              min-height: 420px;\n              object-fit: cover;\n              display: block;\n              transition: transform 500ms ease;\n            }\n\n            .platform-panel:hover .platform-visual img {\n              transform: scale(1.03);\n            }\n\n            .platform-visual::after {\n              content: \"\";\n              position: absolute;\n              inset: 0;\n              background: linear-gradient(180deg, transparent 45%, rgba(5,16,24,0.72) 100%);\n              pointer-events: none;\n            }\n\n            .platform-visual figcaption {\n              position: absolute;\n              left: 22px;\n              bottom: 18px;\n              z-index: 1;\n              color: rgba(255,255,255,0.88);\n              font-size: 0.82rem;\n              font-weight: 700;\n              letter-spacing: 0.04em;\n              text-transform: uppercase;\n            }\n\n            .platform-copy {\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n              padding: 42px 40px;\n            }\n\n            .platform-badge {\n              color: var(--accent);\n              font-size: 0.78rem;\n              font-weight: 850;\n              letter-spacing: 0.08em;\n              text-transform: uppercase;\n            }\n\n            .platform-copy h3 {\n              margin: 14px 0 0;\n              color: var(--ink);\n              font-size: clamp(1.8rem, 3vw, 2.8rem);\n              line-height: 1.05;\n            }\n\n            .platform-copy p {\n              margin: 18px 0 0;\n              color: var(--muted);\n              font-size: 1.05rem;\n              line-height: 1.68;\n            }\n\n            .platform-copy code {\n              color: var(--ink);\n              background: rgba(91,52,137,0.08);\n              border-radius: 4px;\n              padding: 0 5px;\n            }\n\n            .platform-points {\n              display: grid;\n              gap: 12px;\n              margin: 24px 0 0;\n              padding: 0;\n              list-style: none;\n            }\n\n            .platform-points li {\n              position: relative;\n              padding-left: 22px;\n              color: var(--ink);\n              line-height: 1.55;\n            }\n\n            .platform-points li::before {\n              content: \"\";\n              position: absolute;\n              left: 0;\n              top: 0.62em;\n              width: 8px;\n              height: 8px;\n              border-radius: 999px;\n              background: linear-gradient(135deg, var(--accent), #a78bfa);\n              box-shadow: 0 0 0 4px rgba(91,52,137,0.1);\n            }\n\n            .proof-layout,\n            .use-case-layout {\n              display: grid;\n              grid-template-columns: minmax(260px, 0.38fr) minmax(0, 0.62fr);\n              gap: 48px;\n              align-items: start;\n            }\n\n            .proof-intro,\n            .use-case-intro {\n              position: sticky;\n              top: 156px;\n              margin-bottom: 0;\n            }\n\n            .proof-stack,\n            .use-case-list {\n              display: grid;\n              gap: 0;\n            }\n\n            .proof-row {\n              display: grid;\n              grid-template-columns: minmax(0, 1fr) minmax(220px, 0.46fr);\n              gap: 28px;\n              align-items: center;\n              padding: 28px 0;\n              border-top: 1px solid rgba(91,52,137,0.14);\n            }\n\n            .proof-row:last-child {\n              border-bottom: 1px solid rgba(91,52,137,0.14);\n            }\n\n            .proof-row-reverse {\n              grid-template-columns: minmax(220px, 0.46fr) minmax(0, 1fr);\n            }\n\n            .proof-row-reverse .proof-row-copy {\n              order: 2;\n            }\n\n            .proof-row-reverse .proof-row-media {\n              order: 1;\n            }\n\n            .proof-row-label {\n              color: var(--accent);\n              font-size: 0.78rem;\n              font-weight: 850;\n              letter-spacing: 0.06em;\n              text-transform: uppercase;\n            }\n\n            .proof-row-copy h3 {\n              margin: 10px 0 0;\n              color: var(--ink);\n              font-size: clamp(1.35rem, 2.2vw, 1.85rem);\n              line-height: 1.15;\n            }\n\n            .proof-row-copy p {\n              margin: 12px 0 0;\n              color: var(--muted);\n              line-height: 1.62;\n            }\n\n            .proof-row-media {\n              margin: 0;\n              overflow: hidden;\n              border-radius: 14px;\n              border: 1px solid rgba(91,52,137,0.14);\n              aspect-ratio: 4 / 3;\n              background: var(--ink);\n            }\n\n            .proof-row-media img {\n              width: 100%;\n              height: 100%;\n              object-fit: cover;\n              display: block;\n              transition: transform 500ms ease;\n            }\n\n            .proof-row:hover .proof-row-media img {\n              transform: scale(1.04);\n            }\n\n            .use-case-row {\n              display: grid;\n              grid-template-columns: 52px minmax(0, 1fr) 112px;\n              gap: 22px;\n              align-items: center;\n              padding: 22px 0;\n              border-top: 1px solid rgba(91,52,137,0.14);\n              transition: background 180ms ease, padding 180ms ease;\n            }\n\n            .use-case-row:last-child {\n              border-bottom: 1px solid rgba(91,52,137,0.14);\n            }\n\n            .use-case-row:hover {\n              padding-left: 10px;\n              padding-right: 10px;\n              border-radius: 12px;\n              background: rgba(91,52,137,0.04);\n            }\n\n            .use-case-row-index {\n              color: var(--gold);\n              font-size: 1.1rem;\n              font-weight: 900;\n              line-height: 1;\n            }\n\n            .use-case-row-copy h3 {\n              margin: 0;\n              color: var(--ink);\n              font-size: 1.18rem;\n              line-height: 1.2;\n            }\n\n            .use-case-row-copy p {\n              margin: 8px 0 0;\n              color: var(--muted);\n              line-height: 1.55;\n            }\n\n            .use-case-row-thumb {\n              width: 112px;\n              height: 112px;\n              margin: 0;\n              overflow: hidden;\n              border-radius: 12px;\n              border: 1px solid rgba(91,52,137,0.14);\n              background: var(--ink);\n            }\n\n            .use-case-row-thumb img {\n              width: 100%;\n              height: 100%;\n              object-fit: cover;\n              display: block;\n            }\n\n            .feature-band article:hover,\n            .platform-panel:hover,\n            .proof-grid article:hover,\n            .use-case-grid article:hover,\n            .resource-card:hover,\n            .workflow-grid article:hover {\n              transform: translateY(-4px);\n              border-color: rgba(91,52,137,0.34);\n              box-shadow: 0 22px 60px rgba(16,24,32,0.1);\n            }\n\n            .built-for-scroll {\n              display: grid;\n              grid-template-columns: minmax(240px, 0.32fr) minmax(0, 0.68fr);\n              gap: 44px;\n              align-items: start;\n              max-width: 1320px;\n              margin: 0 auto;\n              padding: 18px 32px 78px;\n            }\n\n            .built-for-rail {\n              position: sticky;\n              top: 156px;\n              display: grid;\n              gap: 8px;\n              padding: 18px;\n              border: 1px solid rgba(91,52,137,0.16);\n              border-radius: 8px;\n              background: rgba(255,255,255,0.9);\n              box-shadow: 0 18px 50px rgba(16,24,32,0.07);\n              backdrop-filter: blur(14px);\n            }\n\n            .built-for-step {\n              position: relative;\n              justify-content: flex-start;\n              width: 100%;\n              min-height: 44px;\n              padding: 8px 12px 14px;\n              color: var(--muted);\n              background: transparent;\n              border: none;\n              border-radius: 0;\n              text-align: left;\n              font-weight: 650;\n              transition: color 180ms ease;\n            }\n\n            .built-for-step:hover {\n              color: var(--ink);\n            }\n\n            .built-for-step.active {\n              color: var(--purple);\n              background: transparent;\n              border: none;\n              box-shadow: none;\n              font-weight: 800;\n            }\n\n            .built-for-step.active::after {\n              content: \"\";\n              position: absolute;\n              left: 12px;\n              right: 12px;\n              bottom: 2px;\n              height: 7px;\n              pointer-events: none;\n              background:\n                linear-gradient(\n                  90deg,\n                  var(--purple) 0%,\n                  var(--purple) 10%,\n                  rgba(61,36,96,0.18) 50%,\n                  var(--purple) 90%,\n                  var(--purple) 100%\n                ) top / 100% 1.5px no-repeat,\n                linear-gradient(\n                  90deg,\n                  rgba(61,36,96,0.22) 0%,\n                  rgba(61,36,96,0.22) 28%,\n                  var(--purple) 50%,\n                  rgba(61,36,96,0.22) 72%,\n                  rgba(61,36,96,0.22) 100%\n                ) center / 100% 1px no-repeat,\n                linear-gradient(\n                  90deg,\n                  var(--purple) 0%,\n                  var(--purple) 10%,\n                  rgba(61,36,96,0.18) 50%,\n                  var(--purple) 90%,\n                  var(--purple) 100%\n                ) bottom / 100% 1.5px no-repeat;\n            }\n\n            .built-for-story {\n              display: grid;\n              gap: 24px;\n            }\n\n            .built-for-card {\n              min-height: 68vh;\n              position: relative;\n              display: flex;\n              align-items: flex-end;\n              overflow: hidden;\n              padding: 34px;\n              border-radius: 8px;\n              border: 1px solid rgba(91,52,137,0.16);\n              color: #fff;\n              background:\n                linear-gradient(180deg, rgba(5,16,24,0.12), rgba(5,16,24,0.92)),\n                url(\"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80\");\n              background-position: center;\n              background-size: cover;\n              box-shadow: 0 18px 52px rgba(16,24,32,0.12);\n            }\n\n            .built-for-card::before {\n              content: \"\";\n              position: absolute;\n              inset: 0;\n              background:\n                repeating-linear-gradient(90deg, rgba(167,139,250,0.09) 0, rgba(167,139,250,0.09) 1px, transparent 1px, transparent 56px),\n                radial-gradient(circle at 76% 22%, rgba(124,58,237,0.18), transparent 28%);\n              opacity: 0.75;\n              transition: transform 500ms ease;\n            }\n\n            .built-for-card:hover::before {\n              transform: translateX(28px);\n            }\n\n            .built-for-copy {\n              position: relative;\n              z-index: 1;\n              max-width: 720px;\n              opacity: 0;\n              transform: translateY(26px);\n              transition: opacity 700ms ease, transform 700ms ease;\n            }\n\n            .built-for-card.is-active .built-for-copy {\n              opacity: 1;\n              transform: translateY(0);\n            }\n\n            .built-for-copy span {\n              color: #c4b5fd;\n              font-size: 0.82rem;\n              font-weight: 900;\n              text-transform: uppercase;\n            }\n\n            .built-for-copy h2 {\n              margin: 12px 0 0;\n              font-size: clamp(2rem, 4.6vw, 4.4rem);\n              line-height: 0.96;\n            }\n\n            .built-for-copy p {\n              max-width: 620px;\n              margin: 16px 0 0;\n              color: rgba(248,253,255,0.76);\n              font-size: 1.04rem;\n              line-height: 1.62;\n            }\n\n            .media-built-agents { background-image: linear-gradient(180deg, rgba(5,16,24,0.12), rgba(5,16,24,0.92)), url(\"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80\"); }\n            .media-built-tools { background-image: linear-gradient(180deg, rgba(5,16,24,0.12), rgba(5,16,24,0.92)), url(\"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80\"); }\n            .media-built-b2b { background-image: linear-gradient(180deg, rgba(5,16,24,0.12), rgba(5,16,24,0.92)), url(\"https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80\"); }\n            .media-built-b2c { background-image: linear-gradient(180deg, rgba(5,16,24,0.12), rgba(5,16,24,0.92)), url(\"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80\"); }\n            .media-built-fintech { background-image: linear-gradient(180deg, rgba(5,16,24,0.12), rgba(5,16,24,0.92)), url(\"https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80\"); }\n            .media-built-banks { background-image: linear-gradient(180deg, rgba(5,16,24,0.12), rgba(5,16,24,0.92)), url(\"https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=80\"); }\n            .media-built-commerce { background-image: linear-gradient(180deg, rgba(5,16,24,0.12), rgba(5,16,24,0.92)), url(\"https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1400&q=80\"); }\n            .media-built-web3 { background-image: linear-gradient(180deg, rgba(5,16,24,0.12), rgba(5,16,24,0.92)), url(\"https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=1400&q=80\"); }\n\n            .feature-band article:first-child {\n              border-radius: 8px 0 0 8px;\n            }\n\n            .feature-band article:last-child {\n              border-radius: 0 8px 8px 0;\n            }\n\n            .feature-band span {\n              color: var(--gold);\n              font-weight: 850;\n            }\n\n            .feature-band h2 {\n              margin: 12px 0 8px;\n              color: var(--ink);\n              font-size: 1.1rem;\n            }\n\n            .feature-band p {\n              margin: 0;\n              color: var(--muted);\n              line-height: 1.55;\n            }\n\n            .developer-section {\n              display: grid;\n              grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);\n              gap: 44px;\n              align-items: start;\n              max-width: 1320px;\n              margin: 0 auto;\n              padding: 18px 32px 72px;\n              color: var(--ink);\n            }\n\n            .security-proof-section,\n            .use-case-section,\n            .resources-section {\n              max-width: 1320px;\n              margin: 0 auto;\n              padding: 18px 32px 32px;\n            }\n\n            .section-heading {\n              max-width: 840px;\n              margin-bottom: 28px;\n            }\n\n            .section-heading.compact {\n              max-width: 720px;\n            }\n\n            .section-heading h2 {\n              margin: 0;\n              color: var(--ink);\n              font-size: clamp(2rem, 4vw, 3.5rem);\n              line-height: 1;\n            }\n\n            .section-heading p:not(.eyebrow) {\n              margin: 16px 0 0;\n              color: var(--muted);\n              font-size: 1.05rem;\n              line-height: 1.65;\n            }\n\n            .proof-grid,\n            .use-case-grid,\n            .resources-grid {\n              display: grid;\n              gap: 18px;\n            }\n\n            .proof-grid {\n              grid-template-columns: repeat(4, minmax(0, 1fr));\n            }\n\n            .use-case-grid {\n              grid-template-columns: repeat(4, minmax(0, 1fr));\n            }\n\n            .resources-grid {\n              grid-template-columns: repeat(4, minmax(0, 1fr));\n            }\n\n            .resource-tabs {\n              display: flex;\n              flex-wrap: wrap;\n              gap: 10px;\n              margin-bottom: 18px;\n            }\n\n            .resource-tabs span,\n            .resource-tab {\n              display: inline-flex;\n              align-items: center;\n              min-height: 36px;\n              padding: 0 14px;\n              border: 1px solid rgba(91,52,137,0.18);\n              border-radius: 999px;\n              color: var(--accent);\n              background: #fff;\n              font-weight: 850;\n            }\n\n            .resource-tab.active,\n            .resource-tab:hover {\n              color: #fff;\n              background: var(--ink);\n              border-color: var(--ink);\n            }\n\n            .proof-grid article,\n            .use-case-grid article,\n            .resource-card {\n              min-height: 210px;\n              padding: 22px;\n              color: var(--ink);\n              border: 1px solid rgba(91,52,137,0.16);\n              border-radius: 8px;\n              background: #fff;\n              box-shadow: 0 16px 44px rgba(16,24,32,0.05);\n              transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;\n            }\n\n            .resource-card {\n              display: block;\n              text-decoration: none;\n            }\n\n            .resource-loading {\n              min-height: 210px;\n              display: grid;\n              place-items: center;\n              padding: 22px;\n              border: 1px solid rgba(91,52,137,0.16);\n              border-radius: 8px;\n              color: var(--muted);\n              background: #fff;\n            }\n\n            .proof-grid article span {\n              color: var(--accent);\n              font-size: 0.78rem;\n              font-weight: 850;\n              text-transform: uppercase;\n            }\n\n            .resource-card span {\n              color: var(--accent);\n              font-size: 0.78rem;\n              font-weight: 850;\n              text-transform: uppercase;\n            }\n\n            .proof-grid h3,\n            .resource-card h3,\n            .use-case-grid strong {\n              display: block;\n              margin: 14px 0 0;\n              color: var(--ink);\n              font-size: 1.14rem;\n            }\n\n            .proof-grid p,\n            .resource-card p,\n            .use-case-grid p {\n              margin: 12px 0 0;\n              color: var(--muted);\n              line-height: 1.58;\n            }\n\n            .hero-actions.centered {\n              justify-content: center;\n            }\n\n            .developer-section > div h2 {\n              margin: 0;\n              color: var(--ink);\n              font-size: clamp(1.65rem, 3vw, 2.5rem);\n              line-height: 1.08;\n              font-weight: 700;\n            }\n\n            .landing-close {\n              background:\n                linear-gradient(180deg, rgba(61,36,96,0.98) 0%, rgba(10,8,15,0.98) 42%, #0a0a0f 100%);\n              border-top: 1px solid rgba(167,139,250,0.16);\n            }\n\n            .landing-close .landing-cta {\n              max-width: none;\n              margin: 0;\n              padding: 56px 32px 24px;\n              color: rgba(248,253,255,0.78);\n              background: transparent;\n              border: none;\n              border-radius: 0;\n              box-shadow: none;\n            }\n\n            .landing-cta-inner {\n              max-width: 1320px;\n              margin: 0 auto;\n              display: grid;\n              gap: 28px;\n            }\n\n            .landing-cta-main {\n              display: grid;\n              grid-template-columns: minmax(0, 1.12fr) minmax(280px, 0.88fr);\n              gap: 40px;\n              align-items: center;\n              padding: 34px;\n              border: 1px solid rgba(167,139,250,0.2);\n              border-radius: 16px;\n              background:\n                linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(124,58,237,0.08) 100%),\n                rgba(10,8,15,0.35);\n              box-shadow: 0 24px 70px rgba(0,0,0,0.22);\n            }\n\n            .landing-cta-copy {\n              display: grid;\n              gap: 14px;\n            }\n\n            .landing-close .landing-cta h2 {\n              margin: 0;\n              color: #fff;\n              font-size: clamp(1.55rem, 2.6vw, 2.2rem);\n              line-height: 1.1;\n              font-weight: 700;\n              letter-spacing: -0.02em;\n            }\n\n            .landing-cta-copy p:not(.eyebrow) {\n              max-width: 560px;\n              margin: 0;\n              color: rgba(248,253,255,0.68);\n              font-size: 0.98rem;\n              line-height: 1.65;\n            }\n\n            .landing-cta-actions {\n              display: grid;\n              gap: 12px;\n              justify-items: stretch;\n            }\n\n            .landing-cta-actions .button {\n              width: 100%;\n              min-height: 44px;\n              border-radius: 10px;\n              font-size: 0.92rem;\n              font-weight: 700;\n            }\n\n            .landing-close .landing-cta .eyebrow {\n              margin: 0;\n              color: var(--purple-light);\n              font-size: 0.76rem;\n              font-weight: 850;\n              letter-spacing: 0.08em;\n              text-transform: uppercase;\n            }\n\n            .landing-close .landing-cta .button.primary {\n              background: var(--accent);\n              border-color: var(--accent);\n              box-shadow: 0 12px 32px rgba(124,58,237,0.35);\n            }\n\n            .landing-close .landing-cta .button.primary:hover {\n              background: var(--accent-dark);\n              border-color: var(--accent-dark);\n            }\n\n            .landing-close .landing-cta .button.secondary {\n              color: #f8fdff;\n              background: rgba(255,255,255,0.06);\n              border-color: rgba(255,255,255,0.18);\n            }\n\n            .landing-close .landing-cta .button.secondary:hover {\n              background: rgba(255,255,255,0.12);\n              border-color: rgba(255,255,255,0.28);\n            }\n\n            .landing-cta-points {\n              display: grid;\n              grid-template-columns: repeat(3, minmax(0, 1fr));\n              gap: 12px;\n              margin: 0;\n              padding: 0;\n              list-style: none;\n            }\n\n            .landing-cta-points li {\n              display: grid;\n              gap: 6px;\n              padding: 16px 18px;\n              border: 1px solid rgba(167,139,250,0.16);\n              border-radius: 12px;\n              background: rgba(10,8,15,0.42);\n            }\n\n            .landing-cta-points strong {\n              color: #fff;\n              font-size: 0.9rem;\n              font-weight: 800;\n            }\n\n            .landing-cta-points span {\n              color: rgba(248,253,255,0.58);\n              font-size: 0.84rem;\n              line-height: 1.45;\n            }\n\n            .landing-close .site-footer {\n              display: grid;\n              gap: 34px;\n              margin: 0;\n              padding: 12px 32px 36px;\n              color: rgba(248,253,255,0.72);\n              background: transparent;\n            }\n\n            .landing-close .footer-bottom {\n              border-top-color: rgba(167,139,250,0.16);\n            }\n\n            .developer-section > div > p:not(.eyebrow) {\n              max-width: 560px;\n              color: var(--muted);\n              font-size: 1.05rem;\n              line-height: 1.65;\n            }\n\n            .workflow-grid {\n              display: grid;\n              gap: 14px;\n            }\n\n            .workflow-grid article {\n              display: grid;\n              grid-template-columns: 44px minmax(0, 1fr);\n              column-gap: 16px;\n              padding: 20px;\n              color: var(--ink);\n              border: 1px solid rgba(91,52,137,0.16);\n              border-radius: 8px;\n              background: #fff;\n              box-shadow: 0 16px 40px rgba(16,24,32,0.05);\n              transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;\n            }\n\n            .workflow-grid article span {\n              display: grid;\n              width: 44px;\n              height: 44px;\n              grid-row: span 2;\n              place-items: center;\n              border-radius: 8px;\n              color: #fff;\n              background: var(--ink);\n              font-weight: 850;\n            }\n\n            .workflow-grid strong {\n              align-self: end;\n              font-size: 1.05rem;\n            }\n\n            .workflow-grid p {\n              margin: 6px 0 0;\n              color: var(--muted);\n              line-height: 1.55;\n            }\n\n            .landing-cta .eyebrow,\n            .security-proof-section .eyebrow,\n            .use-case-section .eyebrow,\n            .developer-section .eyebrow {\n              color: var(--accent);\n            }\n\n            .feature-band code,\n            .quickstart-panel code {\n              color: var(--ink);\n            }\n\n            .site-footer {\n              display: grid;\n              gap: 34px;\n              padding: 54px 32px 28px;\n              color: rgba(248,253,255,0.72);\n              background: #0a0a0f;\n            }\n\n            .site-footer .brand {\n              color: #fff;\n            }\n\n            .site-footer .brand-mark {\n              color: #061018;\n              background: #c4b5fd;\n            }\n\n            .footer-brand,\n            .footer-grid,\n            .footer-bottom {\n              width: min(100%, 1320px);\n              margin: 0 auto;\n            }\n\n            .footer-brand p {\n              max-width: 520px;\n              margin: 16px 0 0;\n              line-height: 1.6;\n            }\n\n            .footer-grid {\n              display: grid;\n              grid-template-columns: repeat(4, minmax(0, 1fr));\n              gap: 24px;\n            }\n\n            .footer-grid div {\n              display: grid;\n              gap: 10px;\n            }\n\n            .footer-grid h3 {\n              margin: 0 0 6px;\n              color: #fff;\n              font-size: 0.92rem;\n            }\n\n            .footer-grid a {\n              color: rgba(248,253,255,0.68);\n            }\n\n            .footer-grid a:hover {\n              color: #c4b5fd;\n            }\n\n            .footer-bottom {\n              display: flex;\n              justify-content: space-between;\n              gap: 18px;\n              padding-top: 22px;\n              border-top: 1px solid rgba(255,255,255,0.12);\n              font-size: 0.88rem;\n            }\n\n            .dashboard-shell {\n              display: grid;\n              grid-template-columns: 280px minmax(0, 1fr);\n              min-height: 100vh;\n              background:\n                linear-gradient(180deg, rgba(255,255,255,0.72), rgba(245,243,250,0.92)),\n                radial-gradient(circle at 92% 4%, rgba(91,52,137,0.12), transparent 28%),\n                var(--soft);\n            }\n\n            .sidebar {\n              position: sticky;\n              top: 0;\n              min-height: 100vh;\n              display: flex;\n              flex-direction: column;\n              padding: 24px;\n              color: #fff;\n              background:\n                linear-gradient(180deg, rgba(16,24,32,0.98), rgba(13,37,43,0.98)),\n                var(--ink);\n            }\n\n            .sidebar .brand-mark {\n              color: var(--ink);\n              background: #fff;\n            }\n\n            .sidebar .dashboard-brand-logo {\n              align-self: flex-start;\n              max-width: 100%;\n              margin-right: 0;\n              padding-right: 4px;\n            }\n\n            .sidebar .dashboard-brand-logo img {\n              display: block;\n              width: auto;\n              max-width: 100%;\n            }\n\n            .sidebar nav {\n              display: grid;\n              gap: 10px;\n              margin-top: 44px;\n            }\n\n            .sidebar nav a {\n              display: grid;\n              gap: 3px;\n              padding: 13px 14px;\n              border-radius: 8px;\n              color: rgba(255,255,255,0.76);\n              font-weight: 800;\n            }\n\n            .dashboard-nav-item {\n              display: grid;\n              justify-content: stretch;\n              gap: 3px;\n              width: 100%;\n              min-height: auto;\n              padding: 13px 14px;\n              border: 0;\n              border-radius: 8px;\n              color: rgba(255,255,255,0.76);\n              background: transparent;\n              text-align: left;\n              font-weight: 800;\n            }\n\n            .sidebar nav a.active,\n            .sidebar nav a:hover,\n            .dashboard-nav-item.active,\n            .dashboard-nav-item:hover {\n              color: #fff;\n              background: rgba(255,255,255,0.1);\n            }\n\n            .sidebar nav small,\n            .sidebar-footer small {\n              color: rgba(255,255,255,0.56);\n              font-size: 0.78rem;\n              font-weight: 650;\n            }\n\n            .sidebar-footer {\n              display: flex;\n              align-items: center;\n              gap: 12px;\n              margin-top: auto;\n              padding: 16px;\n              border: 1px solid rgba(255,255,255,0.12);\n              border-radius: 8px;\n              background: rgba(255,255,255,0.07);\n            }\n\n            .sidebar-footer strong {\n              display: block;\n              font-size: 0.95rem;\n            }\n\n            .dashboard-content {\n              width: 100%;\n              padding: 34px;\n            }\n\n            .dashboard-panel {\n              display: none;\n            }\n\n            .dashboard-panel.active {\n              display: block;\n            }\n\n            .dashboard-header {\n              display: flex;\n              align-items: center;\n              justify-content: space-between;\n              gap: 20px;\n              margin-bottom: 18px;\n              padding: 28px;\n              border-color: rgba(91,52,137,0.2);\n              background:\n                linear-gradient(135deg, rgba(255,255,255,0.96), rgba(238,249,251,0.86)),\n                var(--surface);\n              box-shadow: 0 18px 50px rgba(16,24,32,0.07);\n            }\n\n            .dashboard-header h1 {\n              max-width: 780px;\n              font-size: clamp(2rem, 5vw, 3.55rem);\n              line-height: 0.98;\n            }\n\n            .dashboard-title p:not(.eyebrow) {\n              max-width: 720px;\n              margin: 16px 0 0;\n              color: var(--muted);\n              font-size: 1.02rem;\n              line-height: 1.65;\n            }\n\n            .header-actions {\n              display: flex;\n              flex-wrap: wrap;\n              gap: 10px;\n              justify-content: flex-end;\n            }\n\n            .metric-grid,\n            .console-grid {\n              display: grid;\n              gap: 18px;\n            }\n\n            .metric-grid {\n              grid-template-columns: repeat(4, minmax(0, 1fr));\n              margin-bottom: 18px;\n            }\n\n            .metric-card {\n              padding: 18px;\n              border: 1px solid var(--line);\n              border-radius: 8px;\n              background: var(--surface);\n            }\n\n            .metric-card span,\n            .metric-card small {\n              display: block;\n              color: var(--muted);\n            }\n\n            .metric-card span {\n              font-size: 0.82rem;\n              font-weight: 850;\n              text-transform: uppercase;\n            }\n\n            .metric-card strong {\n              display: block;\n              margin-top: 10px;\n              font-size: 2rem;\n              line-height: 1;\n            }\n\n            .metric-card small {\n              margin-top: 10px;\n              line-height: 1.4;\n            }\n\n            .console-grid {\n              grid-template-columns: minmax(0, 1.25fr) minmax(340px, 0.75fr);\n              margin-bottom: 18px;\n            }\n\n            .api-key-panel {\n              border-color: rgba(91,52,137,0.24);\n              background:\n                linear-gradient(135deg, #ffffff, #eef9fb),\n                var(--surface);\n              color: var(--ink);\n              box-shadow: 0 20px 60px rgba(91,52,137,0.1);\n            }\n\n            .api-key-panel .panel-heading,\n            .api-key-panel p {\n              color: var(--muted);\n            }\n\n            .api-key-panel button {\n              color: #fff;\n              background: var(--accent);\n              border-color: var(--accent);\n            }\n\n            .api-key-panel .secret {\n              border: 1px solid rgba(91,52,137,0.18);\n              color: var(--ink);\n              background: #ffffff;\n            }\n\n            .key-meta {\n              display: flex;\n              flex-wrap: wrap;\n              gap: 8px;\n              margin-top: 14px;\n            }\n\n            .key-meta span {\n              display: inline-flex;\n              gap: 6px;\n              padding: 8px 10px;\n              border: 1px solid var(--line);\n              border-radius: 8px;\n              color: var(--muted);\n              background: #ffffff;\n              font-size: 0.86rem;\n            }\n\n            .key-meta b {\n              color: var(--ink);\n            }\n\n            .quickstart-panel ol {\n              display: grid;\n              gap: 12px;\n              margin: 0;\n              padding: 0;\n              list-style: none;\n            }\n\n            .quickstart-panel li {\n              display: grid;\n              grid-template-columns: 34px minmax(0, 1fr);\n              gap: 12px;\n              align-items: center;\n              padding: 12px;\n              border-radius: 8px;\n              background: var(--soft);\n            }\n\n            .quickstart-panel li span {\n              display: grid;\n              width: 34px;\n              height: 34px;\n              place-items: center;\n              border-radius: 8px;\n              color: #fff;\n              background: var(--accent);\n              font-weight: 850;\n            }\n\n            .quickstart-panel li p {\n              margin: 0;\n            }\n\n            .quickstart-panel .panel-heading a {\n              color: var(--accent);\n              font-size: 0.9rem;\n            }\n\n            .openapi-panel {\n              display: flex;\n              align-items: flex-start;\n              justify-content: space-between;\n              gap: 24px;\n              margin-bottom: 18px;\n              padding: 28px;\n              background:\n                linear-gradient(135deg, rgba(255,255,255,0.98), rgba(244,248,251,0.94)),\n                var(--surface);\n            }\n\n            .openapi-panel h2 {\n              margin: 0;\n              font-size: clamp(2rem, 4vw, 3.1rem);\n              line-height: 1;\n            }\n\n            .openapi-panel p {\n              max-width: 850px;\n              margin: 16px 0 0;\n              color: var(--muted);\n              font-size: 1.02rem;\n              line-height: 1.65;\n            }\n\n            .openapi-actions {\n              display: flex;\n              flex-wrap: wrap;\n              gap: 10px;\n              justify-content: flex-end;\n            }\n\n            .openapi-grid {\n              display: grid;\n              grid-template-columns: repeat(3, minmax(0, 1fr));\n              gap: 18px;\n            }\n\n            .openapi-grid h3 {\n              margin: 10px 0 0;\n              font-size: 1.18rem;\n            }\n\n            .mini-label {\n              color: var(--accent);\n              font-size: 0.78rem;\n              font-weight: 850;\n              text-transform: uppercase;\n            }\n\n            .notice-panel {\n              margin-bottom: 18px;\n              border-color: #f0d48a;\n              background: #fff9e8;\n            }\n\n            .notice-panel strong {\n              display: block;\n              color: #7a5200;\n            }\n\n            .sdk-workbench {\n              display: grid;\n              gap: 18px;\n              padding: 0;\n              overflow: hidden;\n              box-shadow: 0 18px 50px rgba(16,24,32,0.06);\n            }\n\n            .sdk-workbench-header {\n              display: flex;\n              align-items: center;\n              justify-content: space-between;\n              gap: 18px;\n              padding: 22px 22px 0;\n            }\n\n            .sdk-workbench-header h2 {\n              margin: 0;\n              font-size: 1.65rem;\n            }\n\n            .sdk-status {\n              display: inline-flex;\n              align-items: center;\n              min-height: 34px;\n              padding: 0 12px;\n              border-radius: 999px;\n              color: #075e35;\n              background: #dcfce7;\n              font-size: 0.86rem;\n              font-weight: 850;\n              white-space: nowrap;\n            }\n\n            .sdk-tabs {\n              display: flex;\n              gap: 8px;\n              padding: 0 22px 18px;\n              overflow-x: auto;\n              border-bottom: 1px solid var(--line);\n            }\n\n            .sdk-tab {\n              flex: 0 0 auto;\n              min-height: 38px;\n              color: var(--muted);\n              background: var(--soft);\n              border-color: var(--line);\n            }\n\n            .sdk-tab.active,\n            .sdk-tab:hover {\n              color: #fff;\n              background: var(--ink);\n              border-color: var(--ink);\n            }\n\n            .sdk-panel {\n              display: none;\n              padding: 4px 22px 22px;\n            }\n\n            .sdk-panel.active {\n              display: block;\n            }\n\n            .sdk-panel-copy {\n              display: grid;\n              gap: 6px;\n              margin-bottom: 18px;\n            }\n\n            .sdk-panel-copy span {\n              color: var(--accent);\n              font-size: 0.78rem;\n              font-weight: 850;\n              text-transform: uppercase;\n            }\n\n            .sdk-panel-copy strong {\n              font-size: 1.25rem;\n              line-height: 1.35;\n            }\n\n            .panel {\n              padding: 22px;\n              border: 1px solid var(--line);\n              border-radius: 8px;\n              background: var(--surface);\n            }\n\n            .panel-heading {\n              display: flex;\n              align-items: center;\n              justify-content: space-between;\n              gap: 12px;\n              margin-bottom: 14px;\n              font-weight: 850;\n            }\n\n            .panel-heading.compact {\n              margin-top: 18px;\n            }\n\n            button {\n              min-height: 34px;\n              color: var(--accent);\n              background: #eef9fb;\n              border-color: #bdecef;\n            }\n\n            .secret {\n              display: block;\n              width: 100%;\n              padding: 16px;\n              overflow-x: auto;\n              border-radius: 8px;\n              color: #fff;\n              background: var(--ink);\n              white-space: nowrap;\n            }\n\n            .panel p {\n              margin: 14px 0 0;\n              color: var(--muted);\n              line-height: 1.55;\n            }\n\n            pre {\n              margin: 0;\n              padding: 16px;\n              overflow-x: auto;\n              border-radius: 8px;\n              color: #ede9fe;\n              background: #102027;\n              line-height: 1.55;\n            }\n\n            .status-panel {\n              display: grid;\n              align-content: center;\n            }\n\n            .status-panel div {\n              display: flex;\n              align-items: center;\n              gap: 10px;\n            }\n\n            .status-dot {\n              width: 12px;\n              height: 12px;\n              border-radius: 999px;\n              background: #22c55e;\n              box-shadow: 0 0 0 6px rgba(34,197,94,0.14);\n            }\n\n            @media (max-width: 860px) {\n              .navbar-shell,\n              .topbar,\n              .dashboard-header {\n                align-items: center;\n                flex-direction: row;\n                flex-wrap: wrap;\n              }\n\n              .navbar-shell {\n                top: 80px;\n                width: min(calc(100% - 28px), 1320px);\n                gap: 12px;\n              }\n\n              .navbar-shell .brand-logo {\n                padding-top: 0.25rem;\n                padding-bottom: 0.25rem;\n              }\n\n              .navbar-toggle {\n                display: inline-flex;\n                margin-left: auto;\n              }\n\n              .nav-pill {\n                display: none;\n                position: absolute;\n                top: calc(100% + 10px);\n                left: 0;\n                right: 0;\n                width: 100%;\n                justify-content: stretch;\n                padding: 14px;\n                border-radius: 16px;\n              }\n\n              .navbar-shell.is-open .nav-pill {\n                display: flex;\n              }\n\n              .nav-pill .nav-actions {\n                flex-direction: column;\n                align-items: stretch;\n                width: 100%;\n                gap: 8px;\n              }\n\n              .nav-pill .nav-actions a {\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                min-height: 42px;\n                padding: 0 14px;\n                border-radius: 10px;\n                background: rgba(255,255,255,0.04);\n              }\n\n              .nav-pill .nav-actions a.button {\n                width: 100%;\n                min-height: 42px;\n              }\n\n              .homepage-utility-bar {\n                align-items: flex-start;\n                flex-direction: column;\n                gap: 6px;\n                min-height: 76px;\n                padding-top: 8px;\n                padding-bottom: 8px;\n              }\n\n              .utility-links {\n                flex-wrap: wrap;\n              }\n\n              .hero,\n              .trust-strip,\n              .feature-band,\n              .platform-scroll,\n              .platform-showcase,\n              .built-for-scroll,\n              .developer-section,\n              .hero-metrics,\n              .proof-grid,\n              .use-case-grid,\n              .proof-layout,\n              .use-case-layout,\n              .resources-grid,\n              .footer-grid,\n              .metric-grid,\n              .openapi-grid,\n              .console-grid,\n              .dashboard-shell {\n                grid-template-columns: 1fr;\n              }\n\n              .hero {\n                min-height: auto;\n                gap: 30px;\n              }\n\n              .homepage-hero-image {\n                min-height: 760px;\n                padding-top: 180px;\n              }\n\n              .homepage-hero-copy {\n                margin-left: 0;\n              }\n\n              .signal-visual {\n                min-height: 520px;\n              }\n\n              .trust-strip {\n                margin-top: 0;\n              }\n\n              .developer-section,\n              .landing-close .landing-cta {\n                padding: 40px 18px 18px;\n              }\n\n              .landing-cta-main {\n                grid-template-columns: 1fr;\n                gap: 24px;\n                padding: 24px;\n              }\n\n              .landing-cta-points {\n                grid-template-columns: 1fr;\n              }\n\n              .landing-close .site-footer {\n                padding: 8px 18px 28px;\n              }\n\n              .feature-band {\n                margin-top: 0;\n              }\n\n              .platform-step-rail,\n              .platform-tabs {\n                position: static;\n              }\n\n              .platform-tabs {\n                display: grid;\n                grid-template-columns: repeat(3, minmax(0, 1fr));\n                gap: 8px;\n                overflow: visible;\n                flex-wrap: wrap;\n                padding-bottom: 0;\n              }\n\n              .platform-tab {\n                flex: 1 1 0;\n                min-width: 0;\n                min-height: 44px;\n                gap: 6px;\n                padding: 8px 6px;\n                justify-content: center;\n              }\n\n              .platform-tab em {\n                min-width: 24px;\n                height: 24px;\n                font-size: 0.68rem;\n              }\n\n              .platform-tab span {\n                font-size: 0.72rem;\n                font-weight: 700;\n                line-height: 1.15;\n                text-align: center;\n              }\n\n              .platform-panel,\n              .platform-panel.active {\n                grid-template-columns: 1fr;\n              }\n\n              .platform-visual,\n              .platform-visual img {\n                min-height: 280px;\n              }\n\n              .platform-copy {\n                padding: 28px 24px 32px;\n              }\n\n              .proof-intro,\n              .use-case-intro {\n                position: static;\n              }\n\n              .proof-row,\n              .proof-row-reverse {\n                grid-template-columns: 1fr;\n              }\n\n              .proof-row-reverse .proof-row-copy,\n              .proof-row-reverse .proof-row-media {\n                order: unset;\n              }\n\n              .use-case-row {\n                grid-template-columns: 44px minmax(0, 1fr);\n              }\n\n              .use-case-row-thumb {\n                display: none;\n              }\n\n              .platform-stage {\n                min-height: auto;\n              }\n\n              .built-for-rail {\n                position: static;\n              }\n\n              .built-for-card {\n                min-height: 520px;\n              }\n\n              .trust-strip span,\n              .feature-band article,\n              .feature-band article:first-child,\n              .feature-band article:last-child {\n                border-radius: 8px;\n              }\n\n              .sidebar {\n                position: static;\n                min-height: auto;\n              }\n\n              .sidebar nav {\n                grid-template-columns: repeat(3, minmax(0, 1fr));\n                margin-top: 22px;\n              }\n\n              .sidebar-footer {\n                margin-top: 18px;\n              }\n\n              .sdk-workbench-header {\n                align-items: flex-start;\n                flex-direction: column;\n              }\n\n              .openapi-panel {\n                align-items: flex-start;\n                flex-direction: column;\n              }\n            }\n\n            @media (max-width: 560px) {\n              .topbar,\n              .hero,\n              .trust-strip,\n              .feature-band,\n              .built-for-scroll,\n              .developer-section,\n              .security-proof-section,\n              .use-case-section,\n              .resources-section,\n              .dashboard-content,\n              .sidebar {\n                padding-left: 18px;\n                padding-right: 18px;\n              }\n\n              .nav-actions,\n              .hero-actions,\n              .sidebar nav,\n              .header-actions,\n              .landing-cta-actions .button {\n                width: 100%;\n              }\n\n              .button {\n                width: 100%;\n              }\n\n              .homepage-utility-bar {\n                padding-left: 18px;\n                padding-right: 18px;\n                font-size: 0.78rem;\n              }\n\n              .utility-announcement,\n              .utility-links {\n                width: 100%;\n                flex-wrap: wrap;\n                gap: 8px;\n              }\n\n              .homepage-hero-image {\n                min-height: 720px;\n                padding: 196px 18px 48px;\n                background-position: 62% center;\n              }\n\n              .homepage-hero-copy h1 {\n                font-size: 1.5rem;\n              }\n\n              .platform-tabs {\n                gap: 6px;\n              }\n\n              .platform-tab {\n                flex-direction: column;\n                gap: 4px;\n                min-height: 52px;\n                padding: 6px 4px;\n              }\n\n              .platform-tab em {\n                min-width: 22px;\n                height: 22px;\n                font-size: 0.62rem;\n              }\n\n              .platform-tab span {\n                font-size: 0.64rem;\n              }\n\n              .dashboard-content {\n                padding-top: 24px;\n              }\n\n              .dashboard-header {\n                padding: 22px;\n              }\n\n              .metric-card strong {\n                font-size: 1.75rem;\n              }\n\n              .signal-visual {\n                min-height: 560px;\n              }\n\n              .terminal-window {\n                top: 18px;\n                right: 18px;\n                left: 18px;\n              }\n\n              .risk-card {\n                right: 18px;\n                bottom: 18px;\n                left: 18px;\n              }\n\n              .footer-bottom {\n                flex-direction: column;\n              }\n\n              .workflow-grid article {\n                grid-template-columns: 38px minmax(0, 1fr);\n              }\n\n              .workflow-grid article span {\n                width: 38px;\n                height: 38px;\n              }\n\n              .sdk-tabs {\n                padding-left: 18px;\n                padding-right: 18px;\n              }\n\n              .sdk-panel,\n              .sdk-workbench-header {\n                padding-left: 18px;\n                padding-right: 18px;\n              }\n\n              h1 {\n                font-size: 2.45rem;\n              }\n            }\r\n" + renderDashboardTheme();
}

export function renderDashboardTheme(): string {
  return `
    .dashboard-shell {
      color: #f4f2fb;
      background:
        radial-gradient(1100px 560px at 86% -8%, rgba(124,58,237,0.20), transparent 55%),
        radial-gradient(900px 520px at 6% 108%, rgba(91,33,182,0.16), transparent 55%),
        #07060c;
    }

    .dashboard-shell .sidebar {
      position: sticky;
      top: 0;
      height: 100vh;
      overflow-y: auto;
      border-right: 1px solid rgba(167,139,250,0.12);
      background:
        linear-gradient(180deg, rgba(22,17,33,0.94), rgba(11,9,18,0.97));
      backdrop-filter: blur(14px);
    }

    .dashboard-shell .sidebar::-webkit-scrollbar { width: 8px; }
    .dashboard-shell .sidebar::-webkit-scrollbar-thumb {
      border-radius: 999px;
      background: rgba(167,139,250,0.24);
    }

    .dashboard-shell .dashboard-content {
      min-width: 0;
    }

    .dashboard-mobile-bar { display: none; }

    .dashboard-backdrop {
      position: fixed;
      inset: 0;
      z-index: 44;
      opacity: 0;
      visibility: hidden;
      background: rgba(5,4,10,0.62);
      backdrop-filter: blur(3px);
      transition: opacity 220ms ease, visibility 220ms ease;
    }

    .dashboard-shell .dashboard-brand-logo {
      background: transparent;
      box-shadow: none;
      padding: 0;
    }

    .dashboard-shell .dashboard-nav-item,
    .dashboard-shell .sidebar nav a {
      border: 1px solid transparent;
      color: rgba(244,242,251,0.6);
      transition: color 160ms ease, background 160ms ease, border-color 160ms ease;
    }

    .dashboard-shell .dashboard-nav-item:hover,
    .dashboard-shell .sidebar nav a:hover {
      color: #fff;
      background: rgba(167,139,250,0.08);
    }

    .dashboard-shell .dashboard-nav-item.active,
    .dashboard-shell .sidebar nav a.active {
      color: #fff;
      background: linear-gradient(135deg, rgba(124,58,237,0.30), rgba(124,58,237,0.08));
      border-color: rgba(167,139,250,0.34);
      box-shadow: inset 0 0 0 1px rgba(167,139,250,0.12), 0 10px 28px rgba(124,58,237,0.20);
    }

    .dashboard-shell .sidebar nav small,
    .dashboard-shell .sidebar-footer small {
      color: rgba(244,242,251,0.42);
    }

    .dashboard-shell .sidebar-footer {
      border: 1px solid rgba(167,139,250,0.14);
      background: rgba(255,255,255,0.04);
    }

    .dashboard-shell .status-dot {
      background: #34d399;
      box-shadow: 0 0 0 5px rgba(52,211,153,0.16);
      animation: dashPulse 2.4s ease-in-out infinite;
    }

    @keyframes dashPulse {
      0%, 100% { box-shadow: 0 0 0 4px rgba(52,211,153,0.18); }
      50% { box-shadow: 0 0 0 8px rgba(52,211,153,0.06); }
    }

    .dashboard-shell h1,
    .dashboard-shell h2,
    .dashboard-shell h3 {
      color: #f6f4fd;
    }

    .dashboard-shell .panel {
      border: 1px solid rgba(167,139,250,0.14);
      border-radius: 16px;
      background: linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.012));
      box-shadow: 0 22px 54px rgba(0,0,0,0.38);
    }

    .dashboard-shell .panel p,
    .dashboard-shell .panel-heading {
      color: rgba(244,242,251,0.72);
    }

    .dashboard-shell .dashboard-header {
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(167,139,250,0.18);
      border-radius: 20px;
      background:
        linear-gradient(135deg, rgba(124,58,237,0.18), rgba(20,16,30,0.55) 62%);
      box-shadow: 0 26px 70px rgba(0,0,0,0.42);
    }

    .dashboard-shell .dashboard-header::after {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      background:
        repeating-linear-gradient(90deg, rgba(167,139,250,0.05) 0, rgba(167,139,250,0.05) 1px, transparent 1px, transparent 76px);
      opacity: 0.5;
    }

    .dashboard-shell .dashboard-title { position: relative; z-index: 1; }
    .dashboard-shell .header-actions { position: relative; z-index: 1; }
    .dashboard-shell .dashboard-title p:not(.eyebrow) { color: rgba(244,242,251,0.68); }

    .dashboard-shell .metric-card {
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(167,139,250,0.14);
      border-radius: 16px;
      background: linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.012));
      box-shadow: 0 18px 44px rgba(0,0,0,0.34);
      transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
    }

    .dashboard-shell .metric-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, rgba(167,139,250,0.7), transparent);
      opacity: 0;
      transition: opacity 160ms ease;
    }

    .dashboard-shell .metric-card:hover {
      transform: translateY(-3px);
      border-color: rgba(167,139,250,0.34);
      box-shadow: 0 24px 56px rgba(124,58,237,0.18);
    }

    .dashboard-shell .metric-card:hover::before { opacity: 1; }
    .dashboard-shell .metric-card span { color: rgba(167,139,250,0.92); }
    .dashboard-shell .metric-card strong { color: #fff; }
    .dashboard-shell .metric-card small { color: rgba(244,242,251,0.5); }

    .dashboard-shell .api-key-panel {
      border: 1px solid rgba(167,139,250,0.32);
      background: linear-gradient(135deg, rgba(124,58,237,0.18), rgba(20,16,30,0.5) 68%);
      box-shadow: 0 26px 64px rgba(124,58,237,0.20);
    }

    .dashboard-shell .api-key-panel p,
    .dashboard-shell .api-key-panel .panel-heading {
      color: rgba(244,242,251,0.72);
    }

    .dashboard-shell .secret {
      border: 1px solid rgba(167,139,250,0.26);
      color: #c4b5fd;
      background: rgba(0,0,0,0.5);
    }

    .dashboard-shell .key-meta span {
      border: 1px solid rgba(167,139,250,0.16);
      color: rgba(244,242,251,0.72);
      background: rgba(255,255,255,0.04);
    }

    .dashboard-shell .key-meta b { color: #fff; }

    .dashboard-shell button {
      color: #c4b5fd;
      background: rgba(167,139,250,0.1);
      border: 1px solid rgba(167,139,250,0.24);
      border-radius: 10px;
      transition: color 150ms ease, background 150ms ease, border-color 150ms ease, transform 150ms ease;
    }

    .dashboard-shell button:hover {
      color: #fff;
      background: rgba(167,139,250,0.2);
      border-color: rgba(167,139,250,0.4);
    }

    .dashboard-shell .button.primary,
    .dashboard-shell .api-key-panel button {
      color: #fff;
      background: linear-gradient(135deg, #7c3aed, #6d28d9);
      border: 1px solid rgba(167,139,250,0.42);
      box-shadow: 0 12px 30px rgba(124,58,237,0.35);
    }

    .dashboard-shell .button.primary:hover,
    .dashboard-shell .api-key-panel button:hover {
      background: linear-gradient(135deg, #8b5cf6, #7c3aed);
    }

    .dashboard-shell .button.secondary {
      color: #ece9f8;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(167,139,250,0.22);
    }

    .dashboard-shell .button.secondary:hover {
      background: rgba(255,255,255,0.1);
      border-color: rgba(167,139,250,0.34);
    }

    .dashboard-shell .quickstart-panel li {
      border: 1px solid rgba(167,139,250,0.1);
      background: rgba(255,255,255,0.03);
    }

    .dashboard-shell .quickstart-panel li span {
      background: linear-gradient(135deg, #7c3aed, #6d28d9);
    }

    .dashboard-shell .quickstart-panel li p { color: rgba(244,242,251,0.82); }

    .dashboard-shell .quickstart-panel code,
    .dashboard-shell .openapi-panel code,
    .dashboard-shell .openapi-grid code {
      padding: 1px 6px;
      border-radius: 5px;
      color: #c4b5fd;
      background: rgba(167,139,250,0.14);
    }

    .dashboard-shell .quickstart-panel .panel-heading a { color: #a78bfa; }

    .dashboard-shell .notice-panel {
      border: 1px solid rgba(167,139,250,0.2);
      background: linear-gradient(135deg, rgba(159,122,234,0.14), rgba(20,16,30,0.5));
    }

    .dashboard-shell .notice-panel strong { color: #c4b5fd; }
    .dashboard-shell .notice-panel p { color: rgba(244,242,251,0.68); }

    .dashboard-shell .sdk-workbench-header h2 { color: #fff; }

    .dashboard-shell .sdk-status {
      color: #6ee7b7;
      background: rgba(16,185,129,0.12);
      border: 1px solid rgba(16,185,129,0.28);
    }

    .dashboard-shell .sdk-tabs {
      border-bottom: 1px solid rgba(167,139,250,0.14);
    }

    .dashboard-shell .sdk-tabs {
      padding: 4px 22px 18px;
    }

    .dashboard-shell .sdk-tab {
      flex: 0 0 auto;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 40px;
      padding: 0 18px;
      color: rgba(244,242,251,0.6);
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(167,139,250,0.14);
      border-radius: 999px;
      font-size: 0.9rem;
      font-weight: 700;
      white-space: nowrap;
    }

    .dashboard-shell .sdk-tab.active,
    .dashboard-shell .sdk-tab:hover {
      color: #fff;
      background: linear-gradient(135deg, rgba(124,58,237,0.92), rgba(109,40,217,0.92));
      border-color: rgba(167,139,250,0.5);
    }

    .dashboard-shell .sdk-panel-copy span { color: #a78bfa; }
    .dashboard-shell .sdk-panel-copy strong { color: #fff; }

    .dashboard-shell pre {
      max-width: 100%;
      overflow-x: auto;
      border: 1px solid rgba(167,139,250,0.14);
      background: rgba(0,0,0,0.55);
      color: #ede9fe;
      -webkit-overflow-scrolling: touch;
      overscroll-behavior-x: contain;
      scroll-behavior: smooth;
      scrollbar-width: thin;
      scrollbar-color: rgba(167,139,250,0.45) transparent;
    }

    .dashboard-shell pre::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    .dashboard-shell pre::-webkit-scrollbar-track {
      background: transparent;
    }

    .dashboard-shell pre::-webkit-scrollbar-thumb {
      border-radius: 999px;
      background: rgba(167,139,250,0.38);
    }

    .dashboard-shell pre::-webkit-scrollbar-thumb:hover {
      background: rgba(167,139,250,0.6);
    }

    .dashboard-shell pre code {
      display: inline-block;
      min-width: max-content;
    }

    .dashboard-shell .panel,
    .dashboard-shell .sdk-workbench,
    .dashboard-shell .sdk-panel,
    .dashboard-shell .metric-card,
    .dashboard-shell .dashboard-content {
      min-width: 0;
      max-width: 100%;
    }

    .dashboard-shell .secret {
      -webkit-overflow-scrolling: touch;
      overscroll-behavior-x: contain;
      scrollbar-width: thin;
      scrollbar-color: rgba(167,139,250,0.45) transparent;
    }

    .dashboard-shell .panel-heading {
      color: #f4f2fb;
      flex-wrap: nowrap;
    }

    .dashboard-shell .panel-heading > span {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .dashboard-shell .panel-heading button {
      flex: 0 0 auto;
    }

    .dashboard-shell .openapi-panel h2,
    .dashboard-shell .openapi-grid h3 { color: #fff; }

    .dashboard-shell .openapi-panel p,
    .dashboard-shell .openapi-grid p { color: rgba(244,242,251,0.68); }

    .dashboard-shell .mini-label { color: #a78bfa; }

    .dashboard-shell .sidebar-account {
      display: grid;
      gap: 12px;
      margin-top: 24px;
      padding: 14px;
      border: 1px solid rgba(167,139,250,0.14);
      border-radius: 14px;
      background: rgba(255,255,255,0.04);
    }

    .dashboard-shell .sidebar-account-info {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
    }

    .dashboard-shell .sidebar-avatar {
      display: grid;
      place-items: center;
      flex: 0 0 auto;
      width: 40px;
      height: 40px;
      border-radius: 999px;
      color: #fff;
      font-weight: 800;
      background: linear-gradient(135deg, #7c3aed, #6d28d9);
    }

    .dashboard-shell .sidebar-account-meta {
      min-width: 0;
    }

    .dashboard-shell .sidebar-account-meta strong {
      display: block;
      overflow: hidden;
      color: #fff;
      font-size: 0.92rem;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .dashboard-shell .sidebar-account-meta small {
      display: block;
      overflow: hidden;
      color: rgba(244,242,251,0.5);
      font-size: 0.78rem;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .dashboard-shell .sidebar-account form {
      margin: 0;
    }

    .dashboard-shell .dashboard-logout {
      width: 100%;
      min-height: 38px;
      color: #e7e2fb;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(167,139,250,0.22);
      border-radius: 10px;
    }

    .dashboard-shell .dashboard-logout:hover {
      color: #fff;
      background: rgba(167,139,250,0.16);
    }

    .dashboard-shell .key-manager {
      display: grid;
      gap: 16px;
      margin-bottom: 18px;
    }

    .dashboard-shell .key-manager-intro {
      margin: 0;
      color: rgba(244,242,251,0.66);
      line-height: 1.55;
    }

    .dashboard-shell .key-create-form {
      display: grid;
      gap: 14px;
      padding: 16px;
      border: 1px solid rgba(167,139,250,0.14);
      border-radius: 14px;
      background: rgba(255,255,255,0.03);
    }

    .dashboard-shell .key-form-grid {
      display: grid;
      grid-template-columns: 1.4fr 1fr 1fr;
      gap: 12px;
    }

    .dashboard-shell .key-field {
      display: grid;
      gap: 6px;
      min-width: 0;
    }

    .dashboard-shell .key-field span {
      color: rgba(244,242,251,0.7);
      font-size: 0.8rem;
      font-weight: 700;
    }

    .dashboard-shell .key-field input,
    .dashboard-shell .key-field select {
      width: 100%;
      min-height: 42px;
      padding: 0 12px;
      color: #f4f2fb;
      font: inherit;
      background: rgba(0,0,0,0.4);
      border: 1px solid rgba(167,139,250,0.22);
      border-radius: 10px;
    }

    .dashboard-shell .key-field input:focus,
    .dashboard-shell .key-field select:focus {
      outline: none;
      border-color: rgba(167,139,250,0.6);
    }

    .dashboard-shell .key-field select option {
      color: #0a0a0f;
    }

    .dashboard-shell .key-field input[type="date"] {
      color-scheme: dark;
    }

    .dashboard-shell .key-form-actions {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 14px;
    }

    .dashboard-shell .key-form-error {
      margin: 0;
      color: #fca5a5;
      font-size: 0.88rem;
    }

    .dashboard-shell .key-reveal {
      display: grid;
      gap: 12px;
      padding: 16px;
      border: 1px solid rgba(52,211,153,0.4);
      border-radius: 14px;
      background: linear-gradient(135deg, rgba(16,185,129,0.14), rgba(20,16,30,0.5));
    }

    .dashboard-shell .key-reveal-head strong {
      display: block;
      color: #6ee7b7;
    }

    .dashboard-shell .key-reveal-head span {
      color: rgba(244,242,251,0.62);
      font-size: 0.86rem;
    }

    .dashboard-shell .key-reveal-value {
      display: flex;
      align-items: stretch;
      gap: 10px;
    }

    .dashboard-shell .key-reveal-value code {
      flex: 1 1 auto;
      min-width: 0;
      padding: 12px 14px;
      overflow-x: auto;
      white-space: nowrap;
      color: #d1fae5;
      background: rgba(0,0,0,0.5);
      border: 1px solid rgba(52,211,153,0.3);
      border-radius: 10px;
    }

    .dashboard-shell .key-list {
      display: grid;
      gap: 10px;
    }

    .dashboard-shell .key-empty {
      margin: 0;
      padding: 18px;
      text-align: center;
      color: rgba(244,242,251,0.55);
      border: 1px dashed rgba(167,139,250,0.2);
      border-radius: 12px;
    }

    .dashboard-shell .key-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      padding: 14px 16px;
      border: 1px solid rgba(167,139,250,0.14);
      border-radius: 12px;
      background: rgba(255,255,255,0.03);
    }

    .dashboard-shell .key-row-main {
      display: grid;
      gap: 6px;
      min-width: 0;
    }

    .dashboard-shell .key-row-title {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 10px;
    }

    .dashboard-shell .key-row-title strong {
      color: #fff;
    }

    .dashboard-shell .key-row-mask {
      color: #c4b5fd;
      font-size: 0.9rem;
      overflow-wrap: anywhere;
    }

    .dashboard-shell .key-row-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 6px 16px;
      color: rgba(244,242,251,0.5);
      font-size: 0.8rem;
    }

    .dashboard-shell .key-row-actions {
      display: flex;
      flex: 0 0 auto;
      gap: 8px;
    }

    .dashboard-shell .key-rotate {
      min-height: 36px;
      color: #d6ccff;
      background: rgba(124,58,237,0.16);
      border: 1px solid rgba(167,139,250,0.32);
      border-radius: 10px;
    }

    .dashboard-shell .key-rotate:hover {
      color: #fff;
      background: rgba(124,58,237,0.32);
      border-color: rgba(167,139,250,0.55);
    }

    .dashboard-shell .key-revoke {
      min-height: 36px;
      color: #fca5a5;
      background: rgba(220,38,38,0.12);
      border: 1px solid rgba(248,113,113,0.3);
      border-radius: 10px;
    }

    .dashboard-shell .key-revoke:hover {
      color: #fff;
      background: rgba(220,38,38,0.3);
      border-color: rgba(248,113,113,0.5);
    }

    .dashboard-shell .key-status {
      display: inline-flex;
      align-items: center;
      padding: 2px 10px;
      border-radius: 999px;
      font-size: 0.72rem;
      font-weight: 800;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }

    .dashboard-shell .key-status-active {
      color: #6ee7b7;
      background: rgba(16,185,129,0.14);
      border: 1px solid rgba(16,185,129,0.3);
    }

    .dashboard-shell .key-status-expired {
      color: #fcd34d;
      background: rgba(234,179,8,0.14);
      border: 1px solid rgba(234,179,8,0.3);
    }

    .dashboard-shell .key-status-revoked {
      color: #fca5a5;
      background: rgba(220,38,38,0.14);
      border: 1px solid rgba(248,113,113,0.3);
    }

    @media (max-width: 860px) {
      .dashboard-shell {
        display: block;
        min-height: 100vh;
      }

      .dashboard-shell .key-form-grid {
        grid-template-columns: 1fr;
      }

      .dashboard-shell .key-row {
        flex-direction: column;
        align-items: stretch;
      }

      .dashboard-shell .key-row-actions {
        width: 100%;
      }

      .dashboard-shell .key-row-actions button {
        flex: 1 1 auto;
      }

      .dashboard-shell .key-reveal-value {
        flex-direction: column;
      }

      .dashboard-shell .key-reveal-value button {
        width: 100%;
      }

      .dashboard-mobile-bar {
        position: sticky;
        top: 16px;
        z-index: 40;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 10px 14px;
        border-bottom: 1px solid rgba(167,139,250,0.14);
        background: rgba(11,9,18,0.92);
        backdrop-filter: blur(14px);
      }

      .dashboard-mobile-bar .brand-logo img {
        height: 56px;
        width: auto;
        max-width: min(220px, 58vw);
        object-fit: contain;
      }

      .dashboard-menu-toggle {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        width: 44px;
        height: 44px;
        min-height: 44px;
        padding: 0;
        border-radius: 12px;
        border: 1px solid rgba(167,139,250,0.28);
        background: rgba(167,139,250,0.1);
      }

      .dashboard-menu-bar {
        display: block;
        width: 18px;
        height: 2px;
        margin: 0 auto;
        border-radius: 999px;
        background: #e7e2fb;
        transition: transform 180ms ease, opacity 180ms ease;
      }

      .dashboard-shell.is-sidebar-open .dashboard-menu-bar:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
      }

      .dashboard-shell.is-sidebar-open .dashboard-menu-bar:nth-child(2) {
        opacity: 0;
      }

      .dashboard-shell.is-sidebar-open .dashboard-menu-bar:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
      }

      .dashboard-shell .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: 46;
        width: min(84vw, 320px);
        height: 100vh;
        min-height: 100vh;
        padding: 22px 20px;
        transform: translateX(-100%);
        transition: transform 260ms cubic-bezier(0.16, 1, 0.3, 1);
        box-shadow: 0 30px 80px rgba(0,0,0,0.55);
      }

      .dashboard-shell.is-sidebar-open .sidebar {
        transform: translateX(0);
      }

      .dashboard-shell .sidebar nav {
        grid-template-columns: 1fr;
        margin-top: 28px;
      }

      .dashboard-shell.is-sidebar-open .dashboard-backdrop {
        opacity: 1;
        visibility: visible;
      }

      .dashboard-shell .dashboard-content {
        max-width: 100vw;
        padding: 22px 12px 40px;
        overflow-x: hidden;
      }

      .dashboard-shell .sdk-panel,
      .dashboard-shell .sdk-tabs,
      .dashboard-shell .sdk-workbench-header {
        padding-left: 12px;
        padding-right: 12px;
      }

      .dashboard-shell .panel {
        padding-left: 14px;
        padding-right: 14px;
      }

      .dashboard-shell .dashboard-header {
        align-items: flex-start;
        flex-direction: column;
        padding: 22px;
      }

      .dashboard-shell .header-actions {
        justify-content: flex-start;
        width: 100%;
      }

      .dashboard-shell .header-actions .button {
        flex: 1 1 auto;
      }

      .dashboard-shell .openapi-panel {
        align-items: flex-start;
        flex-direction: column;
      }

      .dashboard-shell .openapi-actions {
        justify-content: flex-start;
        width: 100%;
      }

      .dashboard-shell pre {
        display: block;
        width: 100%;
        max-width: 100%;
        padding: 14px;
        border-radius: 12px;
        overflow-x: auto;
        white-space: pre;
        font-size: 0.82rem;
        line-height: 1.5;
      }

      .dashboard-shell pre code {
        display: inline-block;
        min-width: max-content;
        white-space: pre;
      }

      .dashboard-shell .panel-heading {
        position: relative;
        z-index: 1;
        align-items: center;
      }

      .dashboard-shell .panel-heading button {
        min-height: 34px;
        padding: 0 14px;
      }

      .dashboard-shell .sdk-tabs {
        scrollbar-width: none;
      }

      .dashboard-shell .sdk-tabs::-webkit-scrollbar {
        display: none;
      }

      .dashboard-shell .metric-card strong {
        font-size: 1.75rem;
      }
    }

    @media (max-width: 560px) {
      .dashboard-shell .dashboard-content {
        padding: 20px 10px 36px;
      }

      .dashboard-shell .sdk-panel,
      .dashboard-shell .sdk-tabs,
      .dashboard-shell .sdk-workbench-header {
        padding-left: 10px;
        padding-right: 10px;
      }

      .dashboard-shell .panel {
        padding-left: 12px;
        padding-right: 12px;
      }

      .dashboard-shell pre {
        font-size: 0.78rem;
      }

      .dashboard-shell .key-meta {
        gap: 6px;
      }

      .dashboard-shell .key-meta span {
        font-size: 0.8rem;
      }
    }
  `;
}
