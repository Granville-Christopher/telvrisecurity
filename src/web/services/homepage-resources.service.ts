import { Injectable } from '@nestjs/common';

export type ResourceTopic =
  | 'ai-innovation'
  | 'identity-security'
  | 'product-releases'
  | 'industry-insights';

export interface HomepageResource {
  readonly type: string;
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly image: string;
}

export interface HomepageResourceFeed {
  readonly topic: ResourceTopic;
  readonly resources: readonly HomepageResource[];
}

export interface AlgoliaHit {
  readonly title?: string;
  readonly story_title?: string;
  readonly url?: string;
  readonly story_url?: string;
  readonly author?: string;
}

interface AlgoliaResponse {
  readonly hits?: readonly AlgoliaHit[];
}

@Injectable()
export class HomepageResourcesService {
  async getResources(topicQuery?: string): Promise<HomepageResourceFeed> {
    const topic = this.normalizeResourceTopic(topicQuery);
    const resources = await this.fetchLiveResources(topic);

    return {
      topic,
      resources,
    };
  }

  private normalizeResourceTopic(topicQuery?: string): ResourceTopic {
    const allowedTopics: readonly ResourceTopic[] = [
      'ai-innovation',
      'identity-security',
      'product-releases',
      'industry-insights',
    ];

    return allowedTopics.find((topic) => topic === topicQuery) ?? 'ai-innovation';
  }

  private async fetchLiveResources(topic: ResourceTopic): Promise<readonly HomepageResource[]> {
    const queryByTopic: Record<ResourceTopic, string> = {
      'ai-innovation': 'AI identity security fraud prevention',
      'identity-security': 'identity security SIM swap account takeover',
      'product-releases': 'API security product release developer platform',
      'industry-insights': 'telecom fraud identity security API',
    };

    const fallback = this.getFallbackResources(topic);

    try {
      const query = encodeURIComponent(queryByTopic[topic]);
      const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}&tags=story&hitsPerPage=3`);

      if (!response.ok) {
        return this.ensureFourResources(topic, fallback);
      }

      const payload = (await response.json()) as unknown;
      const hits = this.extractAlgoliaHits(payload);
      const liveResources = hits.map((hit, index): HomepageResource => {
        const title = hit.title ?? hit.story_title ?? fallback[index]?.title ?? 'Identity security resource';
        const url =
          hit.url ??
          hit.story_url ??
          fallback[index]?.url ??
          'https://www.youtube.com/results?search_query=identity+security';

        return {
          type: index === 0 ? 'Live article' : 'Live resource',
          title,
          description: `Live result for ${this.formatResourceTopic(topic)} from a public technology/news index.`,
          url,
          image: this.getResourceImage(topic, index),
        };
      });

      return this.ensureFourResources(topic, [
        ...liveResources,
        {
          type: 'Watch on YouTube',
          title: `${this.formatResourceTopic(topic)} videos`,
          description: 'Watch explainers and talks related to this topic.',
          url: `https://www.youtube.com/results?search_query=${encodeURIComponent(queryByTopic[topic])}`,
          image: this.getResourceImage(topic, 3),
        },
      ]);
    } catch {
      return this.ensureFourResources(topic, fallback);
    }
  }

  private ensureFourResources(
    topic: ResourceTopic,
    resources: readonly HomepageResource[],
  ): readonly HomepageResource[] {
    const seenUrls = new Set<string>();
    const combined = [...resources, ...this.getSupplementalResources(topic)];
    const uniqueResources = combined.filter((resource) => {
      if (seenUrls.has(resource.url)) {
        return false;
      }

      seenUrls.add(resource.url);
      return true;
    });

    return uniqueResources.slice(0, 4);
  }

  private getSupplementalResources(topic: ResourceTopic): readonly HomepageResource[] {
    return [
      {
        type: 'Watch on YouTube',
        title: `${this.formatResourceTopic(topic)} video briefings`,
        description: 'Video explainers and conference talks related to this topic.',
        url: `https://www.youtube.com/results?search_query=${encodeURIComponent(this.formatResourceTopic(topic))}+security`,
        image: this.getResourceImage(topic, 0),
      },
      {
        type: 'Research',
        title: `${this.formatResourceTopic(topic)} research notes`,
        description: 'Research and technical reading for teams building secure identity systems.',
        url: 'https://arxiv.org/search/cs?query=identity+security&searchtype=all',
        image: this.getResourceImage(topic, 1),
      },
      {
        type: 'Industry insight',
        title: `${this.formatResourceTopic(topic)} market signals`,
        description: 'Current public discussions from builders and security practitioners.',
        url: `https://hn.algolia.com/?q=${encodeURIComponent(this.formatResourceTopic(topic))}`,
        image: this.getResourceImage(topic, 2),
      },
      {
        type: 'Developer docs',
        title: `${this.formatResourceTopic(topic)} implementation guide`,
        description: 'Use the live API documentation and OpenAPI contract to build integrations.',
        url: '/docs',
        image: this.getResourceImage(topic, 3),
      },
    ];
  }

  private extractAlgoliaHits(payload: unknown): readonly AlgoliaHit[] {
    if (!this.isRecord(payload)) {
      return [];
    }

    const hits = payload.hits;
    if (!Array.isArray(hits)) {
      return [];
    }

    return hits
      .filter((hit): hit is AlgoliaHit => this.isRecord(hit))
      .filter((hit) => Boolean(hit.url ?? hit.story_url))
      .slice(0, 3);
  }

  private getFallbackResources(topic: ResourceTopic): readonly HomepageResource[] {
    const fallbackByTopic: Record<ResourceTopic, readonly HomepageResource[]> = {
      'ai-innovation': [
        {
          type: 'Research',
          title: 'Security-first API development',
          description: 'Research on zero-trust API pipelines, runtime protection, and secure design workflows.',
          url: 'https://arxiv.org/abs/2606.09062',
          image: this.getResourceImage(topic, 0),
        },
        {
          type: 'Watch on YouTube',
          title: 'AI identity security videos',
          description: 'Video explainers on AI, identity security, and automated attacks.',
          url: 'https://www.youtube.com/results?search_query=AI+identity+security',
          image: this.getResourceImage(topic, 1),
        },
      ],
      'identity-security': [
        {
          type: 'Article',
          title: 'The SIM-swap fix banks and carriers can use',
          description: 'How real-time SIM-swap checks can reduce fraud in high-risk financial workflows.',
          url: 'https://www.wired.com/story/sim-swap-fix-carriers-banks',
          image: this.getResourceImage(topic, 0),
        },
        {
          type: 'Incident analysis',
          title: 'Why SIM-swap attacks create account takeover risk',
          description: 'A case that shows how phone-number compromise can cascade across accounts.',
          url: 'https://www.theguardian.com/money/2025/apr/15/ee-was-unapologetic-after-i-tried-to-stop-a-sim-swap',
          image: this.getResourceImage(topic, 1),
        },
      ],
      'product-releases': [
        {
          type: 'Product release',
          title: 'OpenAPI-driven SDK generation',
          description: 'Use API contracts to keep SDKs, documentation, and integrations synchronized.',
          url: '/docs-json',
          image: this.getResourceImage(topic, 0),
        },
        {
          type: 'Developer docs',
          title: 'Swagger UI for live endpoint testing',
          description: 'Try the SIM-swap endpoint directly from the interactive API documentation.',
          url: '/docs',
          image: this.getResourceImage(topic, 1),
        },
      ],
      'industry-insights': [
        {
          type: 'Industry insight',
          title: 'SIM-swap fraud and mobile identity risk',
          description: 'Learn why telecom intelligence belongs in modern fraud and account-protection workflows.',
          url: 'https://www.wired.com/story/sim-swap-fix-carriers-banks',
          image: this.getResourceImage(topic, 0),
        },
        {
          type: 'Watch on YouTube',
          title: 'SIM-swap fraud and identity security videos',
          description: 'Explore video explainers about SIM-swap attacks, account takeover, and prevention.',
          url: 'https://www.youtube.com/results?search_query=SIM+swap+fraud+identity+security',
          image: this.getResourceImage(topic, 1),
        },
      ],
    };

    return fallbackByTopic[topic];
  }

  private getResourceImage(topic: ResourceTopic, index: number): string {
    const imagesByTopic: Record<ResourceTopic, readonly string[]> = {
      'ai-innovation': [
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
      ],
      'identity-security': [
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80',
      ],
      'product-releases': [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80',
      ],
      'industry-insights': [
        'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80',
      ],
    };

    return imagesByTopic[topic][index % imagesByTopic[topic].length];
  }

  private formatResourceTopic(topic: ResourceTopic): string {
    return topic
      .split('-')
      .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
      .join(' ');
  }

  private isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null;
  }
}
