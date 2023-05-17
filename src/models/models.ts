export type MostPopularArticleDetailsType = {
  abstract: string;
  byline: string;
  title: string;
  source: string;
  updated: string;
  media: Array<{
    "media-metadata": Array<{
      format: string;
      url: string;
    }>;
  }>;
  section: string;
  published_date: string;
  listType: "topNews";
};

export type MultimediaType = Array<{
  url: string;
  subType: string;
  subtype: string;
}>;

export type SearchArticleDetailType = {
  abstract: string;
  headline: { main: string };
  multimedia: MultimediaType;
  listType: "search";
  byline: { original: string };
  pub_date: string;
  section_name: string;
  type: string;
  id: number;
  image_url: string;
};

export type StateType = {
  topNews:
    | Array<MostPopularArticleDetailsType>
    | Array<SearchArticleDetailType>;
  allNews: Array<SearchArticleDetailType>;
};

export type ArticleDetails = {
  id: number;
  image_url: string;
  main: string;
  description: string;
};
