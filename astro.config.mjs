import { defineConfig } from "astro/config";

// 部署说明：
// - GitHub Pages 项目仓库（如 user.github.io/portfolio）需要 base，构建时用：
//   ASTRO_BASE=/portfolio/ pnpm build
// - 用户名仓库（user.github.io）或 Vercel 使用默认 "/" 即可
const base = process.env.ASTRO_BASE || "/";

export default defineConfig({
  site: process.env.ASTRO_SITE || "https://yourname.github.io",
  base,
});
