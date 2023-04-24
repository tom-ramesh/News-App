import { getRequest } from "./requests";

export const getMostViewedArticles = async () => {
  const data = await fetch(`http://localhost:3000/topNews`);

  return data.json();
};

export const searchArticles = async () => {
  const data = await fetch(`http://localhost:3000/allNews`);

  return data.json();
};
