import { getQueryString } from "./requests";

export const getMostViewedArticles = async () => {
  const data = await fetch(`http://localhost:4001/topNews`);

  return data.json();
};

export const searchArticles = async (searchString: string) => {
  const data = await fetch(
    `http://localhost:4001/allNews?${getQueryString({ q: searchString })}`
  );

  return data.json();
};
