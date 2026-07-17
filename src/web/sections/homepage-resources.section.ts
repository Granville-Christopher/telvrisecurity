export function renderHomepageResourcesSection(): string {
  return `
    <section class="resources-section reveal-up">
      <div class="section-heading">
        <p class="eyebrow" data-i18n="resources.eyebrow">Read. Watch. Learn. More.</p>
        <h2 data-i18n="resources.title">Identity security intelligence for builders.</h2>
        <p data-i18n="resources.lede">Curated articles, research, and video resources for teams building fraud-resistant identity workflows.</p>
      </div>
      <div class="resource-tabs" aria-label="Resource categories" data-i18n-aria="resources.tabs">
        <button type="button" class="resource-tab active" data-resource-topic="ai-innovation" data-i18n="resources.tab.ai">AI & Innovation</button>
        <button type="button" class="resource-tab" data-resource-topic="identity-security" data-i18n="resources.tab.identity">Identity Security</button>
        <button type="button" class="resource-tab" data-resource-topic="product-releases" data-i18n="resources.tab.product">Product Releases</button>
        <button type="button" class="resource-tab" data-resource-topic="industry-insights" data-i18n="resources.tab.industry">Industry Insights</button>
      </div>
      <div class="resources-grid" data-resource-grid>
        <article class="resource-loading" data-i18n="resources.loading">Fetching live resources...</article>
      </div>
    </section>
  `;
}
