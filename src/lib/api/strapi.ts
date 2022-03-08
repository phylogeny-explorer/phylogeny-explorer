import { Content, MediaData } from 'lib/types';

export function getStrapiURL(path = '') {
  return `https://content.phylogenyexplorerproject.co.uk${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path: string) {
  const requestUrl = getStrapiURL(`/api/${path}`);
  const response = await fetch(requestUrl);
  const { data }: Content = await response.json();
  return data;
}

export function getStrapiMedia(data: MediaData) {
  const url = data.attributes.url;
  return url.startsWith('/') ? getStrapiURL(url) : url;
}

export async function getLandingPage() {
  const data = await fetchAPI(
    `landing-page?populate=${encodeURIComponent(
      [
        'hero',
        'hero.background',
        'phylogeny',
        'phylogeny.image',
        'about',
        'about.images',
        'contact',
        'footer',
        'footer.icons',
      ].toString()
    )}`
  );
  return data.attributes;
}

export async function getContributorsPage() {
  const landingPageData = await fetchAPI(
    `landing-page?populate=${encodeURIComponent(
      ['footer', 'footer.icons'].toString()
    )}`
  );
  const contributorsPageData = await fetchAPI(
    `contributors-page?populate=${encodeURIComponent(
      [
        'header',
        'header.background',
        'management',
        'management.profiles',
        'management.profiles.image',
        'devTeam',
        'devTeam.profiles',
        'devTeam.profiles.image',
      ].toString()
    )}`
  );
  return { ...landingPageData.attributes, ...contributorsPageData.attributes };
}
