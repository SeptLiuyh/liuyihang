// 系列页：提前加载接下来一两屏的图片，滚动时不等待
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const img = entry.target.querySelector<HTMLImageElement>("img");
        if (img && img.dataset.src && !img.getAttribute("src")) {
          img.src = img.dataset.src;
        }
        observer.unobserve(entry.target);
      }
    }
  },
  { rootMargin: "150% 0px" }
);

document
  .querySelectorAll<HTMLElement>(".series-page")
  .forEach((figure) => observer.observe(figure));
