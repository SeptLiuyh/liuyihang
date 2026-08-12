// 系列页：提前加载接下来一两屏的图片，滚动时不等待
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const img = entry.target.querySelector<HTMLImageElement>("img");
        if (img && img.dataset.src && !img.getAttribute("src")) {
          img.src = img.dataset.src;
          if (img.dataset.srcset) img.srcset = img.dataset.srcset;
          // 失败时自动重试一次（防止网络抖动导致空白）
          img.addEventListener(
            "error",
            () => {
              if (img.dataset.retried) return;
              img.dataset.retried = "1";
              if (img.dataset.src) img.src = img.dataset.src;
            },
            { once: true }
          );
        }
        observer.unobserve(entry.target);
      }
    }
  },
  { rootMargin: "250% 0px" }
);

document
  .querySelectorAll<HTMLElement>(".series-page")
  .forEach((figure) => observer.observe(figure));
