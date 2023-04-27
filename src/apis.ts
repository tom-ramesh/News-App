import { getQueryString } from "./requests";

export const getMostViewedArticles = async () => {
  console.log(process.env.API_URL);
  const data = await fetch(`${process.env.API_URL}/topNews`);
  return data.json();
};

export const searchArticles = async (searchString: string) => {
  console.log(process.env.API_URL);
  const data = await fetch(
    `${process.env.API_URL}/allNews?${getQueryString({ q: searchString })}`
  );

  return data.json();
};
