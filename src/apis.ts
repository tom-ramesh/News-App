import { getRequest } from "./requests";

export const getMostViewedArticles = async (period: number = 7) => {
  const data = await getRequest(
    `https://api.nytimes.com/svc/mostpopular/v2/emailed/${period.toString()}.json`
  );

  return data;
};

export const searchArticles = async (searchKey: string) => {
  const data = await getRequest(
    "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    { q: searchKey }
  );

  return data;
};
