import { getMostViewedArticles, searchArticles } from "./apis";
import {
  renderAnnouncementTiles,
  renderNewsTiles,
  renderTopArticles,
} from "./components/listrenders";
import { renderSkeletonCards, renderSkeletonTiles } from "./components/loaders";
import { MultimediaType, StateType } from "./models";
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
    () => (state.topNews = data.results ?? []),
    () => renderTopArticles(state, topNewsContainer)
  );

  setState(
    () => (state.allNews = data2.response?.docs ?? []),
    () => renderNewsTiles(state, newsTilesContainer)
  );
};

const handleSubmit = async (searchQuery: string) => {
  renderSkeletonTiles(newsTilesContainer);
  const searchResult = await searchArticles(searchQuery);

  setState(
    () => (state.allNews = searchResult.response.docs),
    () => renderNewsTiles(state, newsTilesContainer)
  );
};

getNews();

//initial API call
// window.addEventListener("load", getNews);

//menu-btn toggle
menuButton.onclick = () => {
  mobileMenu.classList.toggle("active");
  menuIcon.classList.toggle("bx-x");
};

//search function
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit(searchInput.value);
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
