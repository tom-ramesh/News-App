import { ArticleDetails } from "../models/models";

const renderArticleDetails = (
  details: ArticleDetails,
  container: HTMLDivElement
) => {
  const dataToRender = `<img
  src=${details.image_url}
  alt=""
/>
<div class="content-box">
  <h4 class="article-header">${details.main}</h4>
  <p class="article-details">${details.description}</p>
  </div>`;

  container.innerHTML = "";
  container.innerHTML = dataToRender;
};

export default renderArticleDetails;
