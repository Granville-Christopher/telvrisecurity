export function renderHomepageResourcesSection(): string {
  return `
    <section class="resources-section reveal-up">
      <div class="section-heading">
        <p class="eyebrow">Read. Watch. Learn. More.</p>
        <h2>Identity security intelligence for builders.</h2>
        <p>Curated articles, research, and video resources for teams building fraud-resistant identity workflows.</p>
      </div>
      <div class="resource-tabs" aria-label="Resource categories">
        <button type="button" class="resource-tab active" data-resource-topic="ai-innovation">AI & Innovation</button>
        <button type="button" class="resource-tab" data-resource-topic="identity-security">Identity Security</button>
        <button type="button" class="resource-tab" data-resource-topic="product-releases">Product Releases</button>
        <button type="button" class="resource-tab" data-resource-topic="industry-insights">Industry Insights</button>
      </div>
      <div class="resources-grid" data-resource-grid>
        <article class="resource-loading">Fetching live resources...</article>
      </div>
    </section>
  `;
}
