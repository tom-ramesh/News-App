export const renderSkeletonCards = (container: HTMLElement) => {
  const skeletonCards = [...Array(3)].map((_) => {
    return ` <div class="skeleton-card">
      <div class="skeleton-header">
        <div class="skeleton-left">
          <div></div>
          <div class="skeleton-info">
            <div></div>
            <div></div>
          </div>
        </div>
        <div class="skeleton-right">
          <div></div>
        </div>
      </div>
      <div class="skeleton-body">
        <div class="skeleton-content">
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>
      <div class="skeleton-footer">
        <div></div>
        <div></div>
      </div>
    </div>`;
  });

  container.innerHTML = "";
  container.innerHTML = skeletonCards.join("");
};

export const renderSkeletonTiles = (container: HTMLElement) => {
  const skeletonTiles = [...Array(10)].map((_) => {
    return `<div class="skeleton-news-tile">
    <div>
      <div></div>
      <div></div>
    </div>
  </div>`;
  });

  container.innerHTML = "";
  container.innerHTML = skeletonTiles.join("");
};
