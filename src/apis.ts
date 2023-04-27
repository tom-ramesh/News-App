import { getQueryString } from "./requests";

export const getMostViewedArticles = async () => {
  const data = await fetch(`${process.env.API_ENDPOINT}/topNews`);

  return data.json();
};

export const searchArticles = async (searchString: string) => {
  const data = await fetch(
    `${process.env.API_ENDPOINT}/allNews?${getQueryString({ q: searchString })}`
  );

  return data.json();
};
