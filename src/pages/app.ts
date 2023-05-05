import { getMostViewedArticles, searchArticles } from "../api/apis";
import {
  renderAnnouncementTiles,
  renderNewsTiles,
  renderTopArticles,
} from "../components/listrenders";
import {
  renderSkeletonCards,
  renderSkeletonTiles,
} from "../components/loaders";
import { MostPopularArticleDetailsType, StateType } from "../models/models";
import "../styles/styles.css";
import {
  selectElement as $,
  setState,
  toggleDarkModeClass,
} from "../utils/utils";

//selections
const toggleswitch = $(".toggle-switch")! as HTMLDivElement;
const body = document.body;
const menuButton = $(".menu-btn")! as HTMLButtonElement;
const mobileMenu = $(".mobile-menu") as HTMLDivElement;
const menuIcon = $("#menu-icon") as HTMLElement;
const topNewsContainer = $(".news-container div")! as HTMLDivElement;
const newsTilesContainer = $(".news-tile-container")! as HTMLDivElement;
const searchForm = $(".search-block")! as HTMLFormElement;
const searchInput = $("#search-input")! as HTMLInputElement;
const announcementTilesContainer = $(".announcements-table")! as HTMLDivElement;
const homeButton = $("#home-icon")! as HTMLDivElement;
const sideNav = $(".side-nav")! as HTMLElement;
const mainTitle = $(".news-container .title")! as HTMLLabelElement;
const scrollButtons = $("#scroll-button") as NodeListOf<HTMLButtonElement>;

//app state
const state: StateType = {
  topNews: [],
  allNews: [],
};

const renderTopNewsArticles = async () => {
  renderSkeletonCards(topNewsContainer);
  const data = await getMostViewedArticles();

  setState(
    () => (state.topNews = data ?? []),
    () =>
      renderTopArticles<MostPopularArticleDetailsType>(
        state.topNews as Array<MostPopularArticleDetailsType>,
        topNewsContainer
      )
  );
};

const renderSearchResultArticles = async (searchQuery: string = "") => {
  renderSkeletonTiles(newsTilesContainer);

  const searchResult = await searchArticles(searchQuery);

  setState(
    () => (state.allNews = searchResult),
    () => renderNewsTiles(state, newsTilesContainer)
  );

  if (searchResult.length > 0) {
    const newsTiles = $(".news-tile") as NodeListOf<HTMLDivElement>;

    newsTiles.forEach((tile) => {
      tile.addEventListener("click", () => {
        window.location.href = "./detail.html?id=1";
      });
    });
  }
};

const getNews = async () => {
  renderTopNewsArticles();
  renderSearchResultArticles();
  renderAnnouncementTiles(announcementTilesContainer);
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
  renderSearchResultArticles(searchInput.value);
});

// dark toggle
const handleDarkToggle = () => {
  const newsTiles = $(".news-tile")! as NodeListOf<HTMLDivElement>;
  const profileImages = $("#profile-img")! as NodeListOf<HTMLImageElement>;
  const skeletonNewsTiles = $(
    ".skeleton-news-tile"
  ) as NodeListOf<HTMLDivElement>;

  toggleswitch.classList.toggle("change");
  body.classList.toggle("dark-mode");
  sideNav.classList.toggle("dark-mode");

  const toggleItems: Array<NodeListOf<HTMLElement>> = [
    newsTiles,
    profileImages,
    skeletonNewsTiles,
    scrollButtons,
  ];

  toggleItems.forEach((item) => toggleDarkModeClass(item));
};

toggleswitch.addEventListener("click", () => handleDarkToggle());

// nav bar navigation
homeButton.addEventListener("click", () => {
  mainTitle.textContent = "Top News";
  renderTopNewsArticles();
});
