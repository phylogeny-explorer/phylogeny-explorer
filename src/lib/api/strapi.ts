import { Content, MediaData } from 'lib/types';

export function getStrapiURL(path = '') {
  return `https://content.phylogenyexplorerproject.co.uk${path}`;
}

const fetchAPI = async function (path: string) {
  return new Promise<{id: number, attributes: any}>(async function (resolve, reject) {
    try {
      const requestUrl = getStrapiURL(`/api/${path}`);
      const response = await fetch(requestUrl);
      const { data }: Content = await response.json();
      resolve(data)
    } 
    catch (e) {
      console.log(e)
      reject(Error("Couldn't fetch data from strapi"))
    }
  });
};

export function getStrapiMedia(data: MediaData) {
  try {
    const url = data.attributes.url;
    return url.startsWith('/') ? getStrapiURL(url) : url;
  } catch (e) {
    console.error("Couldn't fetch media from Strapi")
  }
}

export async function getLandingPage() {
  await fetchAPI(
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
  )
  .then((data) => { return data.attributes })
  .catch((e: any) => { console.error(e) })
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

export async function getLoginPage() {
  await fetchAPI('login-page?populate=background')
  .then((data) => {return data.attributes})
  .catch((e) => {console.error(e)})
}

export async function getSignupPage() {
  await fetchAPI('signup-page?populate=background')
  .then((data) => {return data.attributes})
  .catch((e) => {console.error(e)})
}
