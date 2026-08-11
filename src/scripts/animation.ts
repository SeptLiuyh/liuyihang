// gsap 通过 public/vendor/gsap.min.js 全局加载
declare const gsap: any;

const mm = gsap.matchMedia();

// 系统开启「减少动态效果」时：不做动效，直接显示全部内容
mm.add("(prefers-reduced-motion: reduce)", () => {
  gsap.set(".nav > *, .main > *", { clearProps: "all" });
});

// 正常动效：导航逐项浮现 + 主内容淡入
mm.add("(prefers-reduced-motion: no-preference)", () => {
  gsap.from(".nav > *", {
    autoAlpha: 0,
    y: 12,
    duration: 0.7,
    stagger: 0.06,
    ease: "power2.out",
    delay: 0.1,
  });

  gsap.from(".main > *", {
    autoAlpha: 0,
    duration: 0.8,
    ease: "power2.out",
    delay: 0.25,
  });
});
