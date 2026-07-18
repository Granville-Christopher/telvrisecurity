import { escapeAttribute, escapeHtml } from '../../rendering/html.utils';

import { DashboardSdkExamples } from './dashboard-sdk-examples';

export function renderDashboardSdkSection(examples: DashboardSdkExamples): string {
  const {
    npmInstall,
    pipInstall,
    goInstall,
    composerInstall,
    gemInstall,
    mavenInstall,
    dotnetInstall,
    curlExample,
    nodeExample,
    fetchExample,
    pythonExample,
    goExample,
    phpExample,
    rubyExample,
    javaExample,
    csharpExample,
  } = examples;

  return `
    <section class="dashboard-panel" data-dashboard-panel="sdk">
      <section class="sdk-workbench panel">
        <div class="sdk-workbench-header">
          <div>
            <p class="eyebrow">SDK explorer</p>
            <h2>Choose a language</h2>
          </div>
          <span class="sdk-status">REST API available now</span>
        </div>

        <nav class="sdk-tabs" aria-label="SDK languages">
          <button type="button" class="sdk-tab active" data-sdk-tab="javascript">JavaScript</button>
          <button type="button" class="sdk-tab" data-sdk-tab="python">Python</button>
          <button type="button" class="sdk-tab" data-sdk-tab="go">Go</button>
          <button type="button" class="sdk-tab" data-sdk-tab="curl">cURL</button>
          <button type="button" class="sdk-tab" data-sdk-tab="php">PHP</button>
          <button type="button" class="sdk-tab" data-sdk-tab="ruby">Ruby</button>
          <button type="button" class="sdk-tab" data-sdk-tab="java">Java</button>
          <button type="button" class="sdk-tab" data-sdk-tab="dotnet">.NET</button>
        </nav>

        <article class="sdk-panel active" data-sdk-panel="javascript">
          <div class="sdk-panel-copy">
            <span>NPM SDK</span>
            <strong>Install the TypeScript/JavaScript client package.</strong>
          </div>
          <div class="panel-heading compact">
            <span>Install</span>
            <button type="button" data-copy="${npmInstall}">Copy</button>
          </div>
          <pre><code>${npmInstall}</code></pre>
          <div class="panel-heading compact">
            <span>SDK example</span>
            <button type="button" data-copy="${escapeAttribute(nodeExample)}">Copy</button>
          </div>
          <pre><code>${escapeHtml(nodeExample)}</code></pre>
          <div class="panel-heading compact">
            <span>Native fetch fallback</span>
            <button type="button" data-copy="${escapeAttribute(fetchExample)}">Copy</button>
          </div>
          <pre><code>${escapeHtml(fetchExample)}</code></pre>
        </article>

        <article class="sdk-panel" data-sdk-panel="python">
          <div class="sdk-panel-copy">
            <span>Python SDK</span>
            <strong>Install the Python client for backend services and data pipelines.</strong>
          </div>
          <div class="panel-heading compact">
            <span>Install</span>
            <button type="button" data-copy="${pipInstall}">Copy</button>
          </div>
          <pre><code>${pipInstall}</code></pre>
          <div class="panel-heading compact">
            <span>SDK example</span>
            <button type="button" data-copy="${escapeAttribute(pythonExample)}">Copy</button>
          </div>
          <pre><code>${escapeHtml(pythonExample)}</code></pre>
        </article>

        <article class="sdk-panel" data-sdk-panel="go">
          <div class="sdk-panel-copy">
            <span>Go SDK</span>
            <strong>Use Go for low-latency services, gateways, and fraud engines.</strong>
          </div>
          <div class="panel-heading compact">
            <span>Install</span>
            <button type="button" data-copy="${goInstall}">Copy</button>
          </div>
          <pre><code>${goInstall}</code></pre>
          <div class="panel-heading compact">
            <span>Go REST example</span>
            <button type="button" data-copy="${escapeAttribute(goExample)}">Copy</button>
          </div>
          <pre><code>${escapeHtml(goExample)}</code></pre>
        </article>

        <article class="sdk-panel" data-sdk-panel="curl">
          <div class="sdk-panel-copy">
            <span>cURL REST</span>
            <strong>Call the live API directly from any platform.</strong>
          </div>
          <div class="panel-heading compact">
            <span>Request</span>
            <button type="button" data-copy="${escapeAttribute(curlExample)}">Copy</button>
          </div>
          <pre><code>${escapeHtml(curlExample)}</code></pre>
        </article>

        <article class="sdk-panel" data-sdk-panel="php">
          <div class="sdk-panel-copy">
            <span>PHP SDK</span>
            <strong>Integrate SIM-swap checks into PHP applications and commerce systems.</strong>
          </div>
          <div class="panel-heading compact">
            <span>Install</span>
            <button type="button" data-copy="${composerInstall}">Copy</button>
          </div>
          <pre><code>${composerInstall}</code></pre>
          <div class="panel-heading compact">
            <span>SDK example</span>
            <button type="button" data-copy="${escapeAttribute(phpExample)}">Copy</button>
          </div>
          <pre><code>${escapeHtml(phpExample)}</code></pre>
        </article>

        <article class="sdk-panel" data-sdk-panel="ruby">
          <div class="sdk-panel-copy">
            <span>Ruby SDK</span>
            <strong>Add telco fraud checks to Rails and Ruby backend workflows.</strong>
          </div>
          <div class="panel-heading compact">
            <span>Install</span>
            <button type="button" data-copy="${gemInstall}">Copy</button>
          </div>
          <pre><code>${gemInstall}</code></pre>
          <div class="panel-heading compact">
            <span>SDK example</span>
            <button type="button" data-copy="${escapeAttribute(rubyExample)}">Copy</button>
          </div>
          <pre><code>${escapeHtml(rubyExample)}</code></pre>
        </article>

        <article class="sdk-panel" data-sdk-panel="java">
          <div class="sdk-panel-copy">
            <span>Java SDK</span>
            <strong>Use Java for enterprise identity and payment risk services.</strong>
          </div>
          <div class="panel-heading compact">
            <span>Gradle (JitPack)</span>
            <button type="button" data-copy="${mavenInstall}">Copy</button>
          </div>
          <pre><code>${escapeHtml(mavenInstall)}</code></pre>
          <div class="panel-heading compact">
            <span>Java SDK example</span>
            <button type="button" data-copy="${escapeAttribute(javaExample)}">Copy</button>
          </div>
          <pre><code>${escapeHtml(javaExample)}</code></pre>
        </article>

        <article class="sdk-panel" data-sdk-panel="dotnet">
          <div class="sdk-panel-copy">
            <span>.NET SDK</span>
            <strong>Connect C# services and ASP.NET applications to the security API.</strong>
          </div>
          <div class="panel-heading compact">
            <span>Install</span>
            <button type="button" data-copy="${dotnetInstall}">Copy</button>
          </div>
          <pre><code>${dotnetInstall}</code></pre>
          <div class="panel-heading compact">
            <span>C# SDK example</span>
            <button type="button" data-copy="${escapeAttribute(csharpExample)}">Copy</button>
          </div>
          <pre><code>${escapeHtml(csharpExample)}</code></pre>
        </article>
      </section>
    </section>
  `;
}
