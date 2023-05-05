//generic function for elemet selection
export const selectElement = (query: string) => {
  const elements = document.querySelectorAll(query);

  if (elements.length > 1) {
    return elements;
  } else if (elements.length === 1) {
    return elements[0];
  }
  return null;
};

//to toggle between dark-mode class of nodelist of elements
export const toggleDarkModeClass = (elementsList: NodeListOf<HTMLElement>) => {
  elementsList?.forEach((element) => {
    element.classList.toggle("dark-mode");
  });
};

//to set the state object and to render elements using the updated state
export const setState = (callBack: () => void, renderFunction?: () => void) => {
  callBack();
  renderFunction && renderFunction();
};

export const generateRandomColor = () => {
  let r = Math.floor(Math.random() * 106) + 125;
  let g = Math.floor(Math.random() * 106) + 125;
  let b = Math.floor(Math.random() * 106) + 125;

  let hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

  return hex;
};
