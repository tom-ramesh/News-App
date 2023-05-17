import { selectElement as $ } from "../utils/utils";
import { getArticleDetails } from "../api/apis";
import "../styles/detail.css";
import renderArticleDetails from "../components/articleDetails";

// selections
const backButton = $(".content-body .back-btn ")! as HTMLButtonElement;
const articleContainer = $(".content-body .article-content")! as HTMLDivElement;

backButton.addEventListener("click", () => {
  history.back();
});

const getDetails = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id")!;
  const articleDetails = await getArticleDetails(+id);

  renderArticleDetails(articleDetails[0], articleContainer);
};

// initial API call
window.addEventListener("load", getDetails);
