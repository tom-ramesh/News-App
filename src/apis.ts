import { getQueryString, getRequest } from "./requests";

export const getMostViewedArticles = async () => {
  const data = await fetch(`http://localhost:3000/topNews`);

  return data.json();
};

export const searchArticles = async (searchString: string) => {
  const data = await fetch(
    `http://localhost:3000/allNews?${getQueryString({ q: searchString })}`
  );

  return data.json();
};
