import { ApifyClient } from 'apify-client';
// unstable_cache used intentionally — cacheComponents disabled in next.config.ts
import { unstable_cache } from 'next/cache';

export type InstagramPost = {
  url: string;
  caption: string;
};

const fetchFromApify = async (): Promise<InstagramPost[]> => {
  if (!process.env.APIFY_TOKEN) {
    console.warn('[instagram] APIFY_TOKEN is not set — skipping fetch')
    return []
  }

  const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

  const username = process.env.INSTAGRAM_USERNAME ?? 'hamketours';
  const run = await client.actor('apify/instagram-post-scraper').call({
    username: [username],
    resultsLimit: 12,
  });

  const { items } = await client.dataset(run.defaultDatasetId).listItems();

  return items
    .filter((item) => typeof item['displayUrl'] === 'string')
    .map((item) => ({
      url: item['displayUrl'] as string,
      caption: typeof item['caption'] === 'string' ? item['caption'] : '',
    }));
};

export const getInstagramImages = unstable_cache(
  async (): Promise<InstagramPost[]> => {
    try {
      return await fetchFromApify();
    } catch (err) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[instagram] Apify fetch failed:', err)
      }
      return [];
    }
  },
  ['instagram-hamketours'],
  { revalidate: 86400, tags: ['instagram'] }
);
