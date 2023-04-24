import { getMostViewedArticles, searchArticles } from "./apis";
import {
  renderAnnouncementTiles,
  renderNewsTiles,
  renderTopArticles,
} from "./components/listrenders";
import { renderSkeletonCards, renderSkeletonTiles } from "./components/loaders";
import {
  MostPopularArticleDetailsType,
  MultimediaType,
  SearchArticleDetailType,
  StateType,
} from "./models";
import { makeImageUrl } from "./requests";

const $ = (query: string) => {
  const elements = document.querySelectorAll(query);

  if (elements.length > 1) {
    return elements;
  } else if (elements.length === 1) {
    return elements[0];
  }
  return null;
};

//selections
const toggleswitch = $(".toggle-switch")! as HTMLDivElement;
const body = document.body;
// const selectOptions = document.querySelectorAll(
//   "#select-option"
// )! as NodeListOf<HTMLDivElement>;
// const input = document.querySelector(".text-box")! as HTMLInputElement;
// const dropdown = document.querySelector(".dropdown")! as HTMLDivElement;
const menuButton = $(".menu-btn")! as HTMLButtonElement;
const mobileMenu = $(".mobile-menu") as HTMLDivElement;
const menuIcon = $("#menu-icon") as HTMLElement;
const topNewsContainer = $(".news-container div")! as HTMLDivElement;
const newsTilesContainer = $(".news-tile-container")! as HTMLDivElement;
const searchForm = $(".search-block")! as HTMLFormElement;
const searchInput = $("#search-input")! as HTMLInputElement;
const announcementTilesContainer = $(
  ".announcements-container div"
)! as HTMLDivElement;
const mobileSearchForm = $(".mobile-search") as HTMLFormElement;
const mobileSearchInput = $("#mobile-search-input") as HTMLInputElement;

// dropdown options
// selectOptions.forEach((option) => {
//   option.addEventListener("click", () => {
//     input.value = option.textContent ?? "";
//   });
// });

// dropdown.onclick = function () {
//   dropdown.classList.toggle("active");
// };

//app state
const state: StateType = { topNews: [], allNews: [] };

const setState = (callBack: () => void, renderFunction?: () => void) => {
  callBack();
  renderFunction && renderFunction();
};

const getNews = async () => {
  renderSkeletonCards(topNewsContainer);
  renderSkeletonTiles(newsTilesContainer);
  renderAnnouncementTiles(announcementTilesContainer);
  const data = await getMostViewedArticles();

  const data2 = await searchArticles("");

  setState(
    () => (state.topNews = data ?? []),
    () =>
      renderTopArticles<MostPopularArticleDetailsType>(
        state.topNews as Array<MostPopularArticleDetailsType>,
        topNewsContainer
      )
  );

  setState(
    () => (state.allNews = data2.response?.docs ?? []),
    () => renderNewsTiles(state, newsTilesContainer)
  );
};

const handleSubmit = async () => {
  renderSkeletonTiles(newsTilesContainer);
  const searchResult = await searchArticles("");

  setState(
    () => (state.allNews = searchResult),
    () => renderNewsTiles(state, newsTilesContainer)
  );
};

const handleMobileSearch = async () => {
  const searchResult = await searchArticles(mobileSearchInput.value);

  setState(
    () => (state.topNews = searchResult),
    () =>
      renderTopArticles<SearchArticleDetailType>(
        state.topNews as Array<SearchArticleDetailType>,
        topNewsContainer
      )
  );
};

// initial API call
window.addEventListener("load", getNews);

//menu-btn toggle
menuButton.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  mobileMenu.classList.toggle("active");
};

//search function
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit();
});

mobileSearchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleMobileSearch();
});

// dark toggle
toggleswitch.addEventListener("click", () => {
  const announcementTiles = $(
    ".announcement-tile"
  )! as NodeListOf<HTMLDivElement>;
  const newsTiles = $(".news-tile")! as NodeListOf<HTMLDivElement>;
  const profileImages = $("#profile-img")! as NodeListOf<HTMLImageElement>;
  const skeletonNewsTiles = $(
    ".skeleton-news-tile"
  ) as NodeListOf<HTMLDivElement>;

  toggleswitch.classList.toggle("change");
  body.classList.toggle("dark-mode");

  newsTiles?.forEach((tile) => {
    tile.classList.toggle("dark-mode");
  });

  profileImages?.forEach((tile) => {
    tile.classList.toggle("dark-mode");
  });

  announcementTiles?.forEach((tile) => {
    tile.classList.toggle("dark-mode");
  });

  skeletonNewsTiles?.forEach((tile) => {
    tile.classList.toggle("dark-mode");
  });
});
