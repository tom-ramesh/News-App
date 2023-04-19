type MostPopularArticleDetailsType = {
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
};

export type StateType = {
  topNews: Array<MostPopularArticleDetailsType>;
  allNews: Array<SearchArticleDetailType>;
};
