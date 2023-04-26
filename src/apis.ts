import { getQueryString } from "./requests";

export const getMostViewedArticles = async () => {
  const data = await fetch(`/api/topNews`);

  return data.json();
};

export const searchArticles = async (searchString: string) => {
  const data = await fetch(
    `http://localhost:3001/allNews?${getQueryString({ q: searchString })}`
  );

  return data.json();
};
