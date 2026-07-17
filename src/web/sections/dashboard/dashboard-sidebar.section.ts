import { SessionUser } from '../../../auth/session.service';
import { escapeHtml } from '../../rendering/html.utils';

export function renderDashboardSidebarSection(user: SessionUser): string {
  const displayName = escapeHtml(user.fullName || user.email);
  const email = escapeHtml(user.email);

  return `
    <aside class="sidebar">
      <a class="brand brand-logo dashboard-brand-logo inline-flex shrink-0 items-center rounded-full bg-[linear-gradient(to_bottom,transparent,transparent,white,transparent,transparent)] pl-2 pr-1 py-1.5" href="/" aria-label="Telvri Security home">
        <img
          src="/media/logo/telvri.png"
          alt="Telvri Security"
          class="block h-14 w-auto max-w-full object-contain"
        />
      </a>
      <nav>
        <button type="button" class="dashboard-nav-item active" data-dashboard-tab="overview">
          <span>Overview</span><small>Keys and quick start</small>
        </button>
        <button type="button" class="dashboard-nav-item" data-dashboard-tab="sdk">
          <span>SDK Explorer</span><small>Language examples</small>
        </button>
        <button type="button" class="dashboard-nav-item" data-dashboard-tab="openapi">
          <span>OpenAPI JSON</span><small>Client generation</small>
        </button>
        <a href="/docs"><span>Swagger Docs</span><small>Try requests</small></a>
      </nav>
      <div class="sidebar-account">
        <div class="sidebar-account-info">
          <span class="sidebar-avatar">${escapeHtml((user.fullName || user.email).charAt(0).toUpperCase())}</span>
          <div class="sidebar-account-meta">
            <strong>${displayName}</strong>
            <small>${email}</small>
          </div>
        </div>
        <form method="post" action="/auth/logout">
          <button type="submit" class="dashboard-logout">Sign out</button>
        </form>
      </div>
      <div class="sidebar-footer">
        <span class="status-dot"></span>
        <div>
          <strong>API online</strong>
          <small>Live production endpoint</small>
        </div>
      </div>
    </aside>
  `;
}
