// const API_KEY = "4Gc3VwuIeSAHpgSQIKcphxZv9BPW36dc-gY3Vw_CpBY";
const NY_API_KEY = "zDWBvujoI2wUGWQcJmGiTthncx9rz4Jj";

export const getRequest = async (
  url: string,
  params?: { [key: string]: any }
) => {
  const queryString = new URLSearchParams(params).toString();
  const requestUrl = queryString
    ? `${url}?${queryString}&api-key=${NY_API_KEY}`
    : `${url}?api-key=${NY_API_KEY}`;
  let a;
  try {
    const response = await fetch(requestUrl, { method: "GET" });
    return response.json();
  } catch (err) {
    console.log("error while processing request", err);
  }
};

export const makeImageUrl = (path: string) =>
  `https://api.nytimes.com/svc/search/v2/articlesearch.json/get/${path}?api-key=${NY_API_KEY}`;

export const getQueryString = (params: { [key: string]: any }) => {
  const queryString = new URLSearchParams(params).toString();

  return queryString;
};
