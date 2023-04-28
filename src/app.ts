import { getMostViewedArticles, searchArticles } from "./apis";
import {
  announcementTiles,
  renderAnnouncementTiles,
  renderNewsTiles,
  renderTopArticles,
} from "./components/listrenders";
import { renderSkeletonCards, renderSkeletonTiles } from "./components/loaders";
import {
  MostPopularArticleDetailsType,
  SearchArticleDetailType,
  StateType,
} from "./models";
import "../styles.css";

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
const menuButton = $(".menu-btn")! as HTMLButtonElement;
const mobileMenu = $(".mobile-menu") as HTMLDivElement;
const menuIcon = $("#menu-icon") as HTMLElement;
const topNewsContainer = $(".news-container div")! as HTMLDivElement;
const newsTilesContainer = $(".news-tile-container")! as HTMLDivElement;
const searchForm = $(".search-block")! as HTMLFormElement;
const searchInput = $("#search-input")! as HTMLInputElement;
const announcementTilesContainer = $(".announcements-table")! as HTMLDivElement;
const mobileSearchForm = $(".mobile-search") as HTMLFormElement;
const mobileSearchInput = $("#mobile-search-input") as HTMLInputElement;
const homeButton = $("#home-icon")! as HTMLDivElement;
const nightModeButton = $(".night-mode-btn") as HTMLDivElement;
const announcementsButton = $("#announcements-icon") as HTMLDivElement;
const sideNav = $(".side-nav")! as HTMLElement;
const mainTitle = $(".news-container .title")! as HTMLLabelElement;
const carouselLeft = $(".btn-left") as HTMLButtonElement;
const carouselRight = $(".btn-right") as HTMLButtonElement;

//app state
const state: StateType = {
  topNews: [],
  allNews: [],
  firstIndex: 0,
  lastIndex: 7,
};

const setState = (callBack: () => void, renderFunction?: () => void) => {
  callBack();
  renderFunction && renderFunction();
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

const getNews = async () => {
  renderSkeletonTiles(newsTilesContainer);
  renderAnnouncementTiles(announcementTilesContainer);

  const data2 = await searchArticles("");
  renderTopNewsArticles();

  setState(
    () => (state.allNews = data2 ?? []),
    () => renderNewsTiles(state, newsTilesContainer)
  );
};

const handleSubmit = async () => {
  renderSkeletonTiles(newsTilesContainer);
  const searchResult = await searchArticles(searchInput.value);

  setState(
    () => (state.allNews = searchResult),
    () => renderNewsTiles(state, newsTilesContainer)
  );
};

const handleMobileSearch = async () => {
  mainTitle.textContent = "Results";
  renderSkeletonCards(topNewsContainer);
  const searchResult = await searchArticles(mobileSearchInput.value);

  setState(
    () => (state.topNews = searchResult),
    () =>
      renderTopArticles<SearchArticleDetailType>(
        state.topNews as Array<SearchArticleDetailType>,
        topNewsContainer
      )
  );

  menuIcon.classList.toggle("bx-x");
  mobileMenu.classList.toggle("active");
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
const handleDarkToggle = (isMobile: boolean = false) => {
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
  sideNav.classList.toggle("dark-mode");

  if (isMobile) {
    const btnLabel = $(".night-mode-btn label")! as HTMLLabelElement;
    const btnIcon = $("#mode-icon")! as HTMLElement;
    const darkMode = btnLabel.textContent === "Switch to Dark Mode";
    const label = darkMode ? "Switch to Light Mode" : "Switch to Dark Mode";

    mobileMenu.classList.toggle("dark-mode");
    darkMode
      ? btnIcon.classList.replace("bxs-moon", "bx-sun")
      : btnIcon.classList.replace("bx-sun", "bxs-moon");
    btnLabel.innerHTML = "";
    btnLabel.innerHTML = label;
  }

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
};

toggleswitch.addEventListener("click", () => handleDarkToggle());

nightModeButton.addEventListener("click", () => handleDarkToggle(true));

// nav bar navigation
homeButton.addEventListener("click", () => {
  mainTitle.textContent = "Top News";
  renderTopNewsArticles();
});
announcementsButton.addEventListener("click", () => {
  mainTitle.textContent = "Announcements";
  renderAnnouncementTiles(topNewsContainer);
});

// carousel logic
const announcementTilesLength = announcementTiles.length;

carouselLeft.addEventListener("click", () => {
  const newFirstIndex = state.firstIndex - 7;
  if (newFirstIndex >= 0) {
    state.firstIndex -= 7;
    state.lastIndex -= 7;
  } else if (newFirstIndex < 0 && state.firstIndex !== 0) {
    state.firstIndex = 0;
    state.lastIndex = 7;
  }

  renderAnnouncementTiles(
    announcementTilesContainer,
    state.firstIndex,
    state.lastIndex
  );
});

carouselRight.addEventListener("click", () => {
  const newLastIndex = state.lastIndex + 7;
  if (newLastIndex <= announcementTilesLength) {
    state.lastIndex += 7;
    state.firstIndex += 7;
  } else if (
    newLastIndex > announcementTilesLength &&
    state.lastIndex !== announcementTilesLength
  ) {
    state.lastIndex =
      newLastIndex > announcementTilesLength
        ? announcementTilesLength
        : newLastIndex;
    state.firstIndex =
      state.firstIndex + 7 - (newLastIndex - announcementTilesLength);
  }

  renderAnnouncementTiles(
    announcementTilesContainer,
    state.firstIndex,
    state.lastIndex
  );
});
