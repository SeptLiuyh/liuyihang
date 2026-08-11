// 移动端：汉堡按钮开合全屏菜单
const btn = document.querySelector<HTMLButtonElement>("#menu-btn");
const sidebar = document.querySelector<HTMLElement>(".sidebar");

if (btn && sidebar) {
  const setOpen = (open: boolean) => {
    sidebar.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  };

  btn.addEventListener("click", () => {
    setOpen(!sidebar.classList.contains("open"));
  });

  sidebar.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => setOpen(false))
  );
}
