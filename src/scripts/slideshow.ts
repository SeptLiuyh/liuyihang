// gsap 通过 public/vendor/gsap.min.js 全局加载
declare const gsap: any;

const container = document.querySelector<HTMLElement>(".slideshow");
const slides = gsap.utils.toArray<HTMLElement>(".slide");

if (container && slides.length >= 2) {
  // 每次刷新随机一张作为起始照片
  const randomIndex = () =>
    Math.floor(Math.random() * slides.length);
  let current = randomIndex();

  // 初始状态：随机起始照片可见，其余隐藏（zIndex 保证叠放顺序）
  slides.forEach((slide, i) =>
    gsap.set(slide, {
      autoAlpha: i === current ? 1 : 0,
      zIndex: i === current ? 1 : 0,
    })
  );

  // 「减少动态效果」时仍自动切换，只是不做淡入淡出动画
  const reduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const FADE = reduced ? 0 : 1.2;

  const INTERVAL = 10000; // 每 10 秒切换一张

  // 让容器跟随当前照片的比例，保证不裁切
  const applyRatio = (index: number) => {
    // 优先用图片真实比例（浏览器会正确读取 EXIF 方向）
    const img = slides[index]?.querySelector("img");
    const nw = img?.naturalWidth;
    const nh = img?.naturalHeight;
    if (nw && nh) {
      container.style.setProperty("--ar", `${nw}/${nh}`);
      container.style.setProperty("--ar-num", (nw / nh).toFixed(4));
    } else {
      const ar = slides[index]?.dataset.ar;
      const arNum = slides[index]?.dataset.arNum;
      if (ar) container.style.setProperty("--ar", ar);
      if (arNum) container.style.setProperty("--ar-num", arNum);
    }
  };
  applyRatio(current);

  // 提前加载接下来两张，避免切换时空白
  const loadAhead = (count = 2) => {
    let started = 0;
    for (let k = 1; k <= slides.length && started < count; k++) {
      const idx = (current + k) % slides.length;
      const img = slides[idx]?.querySelector("img");
      if (img && img.dataset.src && !img.src) {
        img.src = img.dataset.src;
        if (img.dataset.srcset) img.srcset = img.dataset.srcset;
        started++;
      }
    }
  };
  loadAhead();

  // 图片加载完成后刷新比例（处理 EXIF 方向导致的横竖颠倒）
  slides.forEach((slide, i) => {
    slide
      .querySelector("img")
      ?.addEventListener("load", () => {
        if (i === current) applyRatio(i);
      });
  });

  // 随机切换到下一张（不重复当前张）
  const nextRandom = () => {
    let next = randomIndex();
    while (next === current) next = randomIndex();
    // 按需加载：切换前才给下一张设置真实图片地址
    const img = slides[next]?.querySelector("img");
    if (img && img.dataset.src && !img.src) {
      img.src = img.dataset.src;
      if (img.dataset.srcset) img.srcset = img.dataset.srcset;
    }
    goTo(next);
  };

  const goTo = (index: number) => {
    if (index === current) return;
    const prev = slides[current];
    const next = slides[index];
    current = index;
    applyRatio(current);
    gsap.to(prev, { autoAlpha: 0, duration: FADE, ease: "power1.inOut", zIndex: 0 });
    gsap.to(next, { autoAlpha: 1, duration: FADE, ease: "power1.inOut", zIndex: 1 });
    loadAhead(2);
  };

  window.setInterval(nextRandom, INTERVAL);
}
