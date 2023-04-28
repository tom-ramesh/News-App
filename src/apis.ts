import { getQueryString } from "./requests";

export const getMostViewedArticles = async () => {
  const data = await fetch(`${API_URL}/topNews`);
  return data.json();
};

export const searchArticles = async (searchString: string) => {
  const data = await fetch(
    `${API_URL}/allNews?${getQueryString({ q: searchString })}`
  );

  return data.json();
};
