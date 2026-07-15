---
description: Telvri Security API project overview, architecture, setup, and development guide
alwaysApply: true
---

# Telvri Security — Identity Security API

Developer-first **Telco Identity Security API** built with **NestJS** and **TypeScript**. Telvri Security helps teams detect high-risk mobile identity changes (SIM-swap signals) before sensitive account actions such as login recovery, payouts, and wallet resets.

## Quick start

```bash
npm install
npm run start:dev
```

| URL | Purpose |
|-----|---------|
| http://localhost:3000 | Marketing homepage |
| http://localhost:3000/dashboard | Developer dashboard (API keys, SDK examples) |
| http://localhost:3000/docs | Swagger UI |
| http://localhost:3000/docs-json | OpenAPI JSON spec |
| http://localhost:3000/homepage/resources | Homepage resource feed API |

Production build:

```bash
npm run build
npm run start
```

`nest build` copies `src/MEDIA/**/*` into `dist/MEDIA` via `nest-cli.json` assets config.

## Core API

### SIM-swap risk check

**`POST /v1/security/sim-check`**

Authenticated with a developer API key.

**Headers (either):**
- `X-API-Key: rt_live_<key>`
- `Authorization: Bearer rt_live_<key>`

**Request body:**

```json
{
  "phoneNumber": "+2348031234567",
  "maxAgeHours": 24
}
```

**Response:**

```json
{
  "phoneNumber": "+2348031234567",
  "swapped": false,
  "lastSwappedAt": "2026-07-14T16:27:00.000Z",
  "provider": "MTN Nigeria",
  "operator": "MTN Nigeria"
}
```

Mock behaviour: numbers ending in `9` return `swapped: true`. Keys must start with `rt_live_`.

## Project structure

```
src/
├── main.ts                 # Bootstrap, Swagger, global validation pipe
├── app.module.ts           # Root module
├── auth/                   # API key guard and developer client types
├── sim-swap/               # SIM-swap endpoint (controller, service, DTOs)
├── MEDIA/                  # Static assets (logo, images)
│   └── logo/telvri.png     # Primary brand logo
└── web/                    # Server-rendered marketing site + dashboard
    ├── web.controller.ts   # Routes only (thin controller)
    ├── web.module.ts
    ├── services/
    │   └── homepage-resources.service.ts
    ├── rendering/
    │   ├── page.renderer.ts
    │   ├── site.styles.ts
    │   ├── site.scripts.ts
    │   └── html.utils.ts
    └── sections/           # React-style HTML composition
        ├── homepage*.section.ts
        ├── homepage.sections.ts      # Homepage composer
        ├── homepage-closing.section.ts
        └── dashboard/
            ├── dashboard.sections.ts # Dashboard composer
            └── dashboard-*.section.ts
```

## Web architecture

HTML is **not** embedded in controllers. Each UI block lives in its own section file; composers stitch sections together:

- **Homepage:** `renderHomepageSections()` in `homepage.sections.ts`
- **Dashboard:** `renderDashboardSections()` in `dashboard/dashboard.sections.ts`
- **Page shell:** `renderPage()` in `rendering/page.renderer.ts` (title, global CSS/JS, Tailwind CDN)

### Media routes

| Route | File |
|-------|------|
| `/media/logo/telvri.png` | `src/MEDIA/logo/telvri.png` (primary logo) |
| `/media/telvri.png` | `src/MEDIA/telvri.png` |
| `/media/telvri.jpeg` | `src/MEDIA/telvri.jpeg` |

## SDK packages (dashboard examples)

| Language | Package |
|----------|---------|
| JavaScript/TypeScript | `@telvri/security` |
| Python | `telvri-security` |
| Go | `github.com/telvri-security/telvri-go` |
| PHP | `telvri/security` |
| Ruby | `telvri_security` |
| Java | `com.telvri:security:1.0.0` |
| .NET | `Telvri.Security` |

Dashboard mock key: `rt_live_test_123456789`

## Development standards

1. **NestJS modular architecture** — features isolated in modules with clear controller/service/DTO/guard boundaries.
2. **No placeholders** — functional code must be complete and executable; no TODOs in production paths.
3. **Strict TypeScript** — explicit types for domain objects, request metadata, service returns, and injected dependencies.
4. **OpenAPI completeness** — `@nestjs/swagger` decorators on every controller and DTO.
5. **Validation** — `class-validator` and `class-transformer` on all inbound payloads.
6. **Structured errors** — NestJS HTTP exceptions with clear error payloads.

## Brand

- **Product name:** Telvri Security
- **Theme:** Purple/black (`--accent: #7c3aed`, `--purple: #3d2460`, `--ink: #0a0a0f`)
- **Logo:** `/media/logo/telvri.png` with white gradient pill wrapper in navbar, dashboard, and footer

## Scripts

| Command | Description |
|---------|-------------|
| `npm run start:dev` | Development server with watch |
| `npm run build` | Compile to `dist/` |
| `npm run start` | Run compiled app |
| `npm run format` | Prettier format `src/**/*.ts` |
