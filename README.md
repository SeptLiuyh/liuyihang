# 个人摄影作品集（参考 wangchenyang.site 风格）

极简黑白风格的个人摄影作品集，基于 **Astro + GSAP**：

- 左侧固定导航：姓名「刘易航 | Liu Yihang」、Works（摄影系列目录）、About、Contact
- 首页右侧：全屏照片轮播（淡入淡出，10 秒自动播放，不裁切照片）
- 每个摄影系列一个独立页面，照片放入对应文件夹自动显示
- 照片左下角小字说明：同目录放同名 .txt 文件（如 `IMG_6384.jpg` ↔ `IMG_6384.txt`）
- 「探索时期」系列自动按拍摄时间排序；其他系列按文件名排序

## 快速开始

需要 Node 18.17+ 和 pnpm（或 npm）。

```bash
pnpm install
pnpm dev       # 本地预览 http://localhost:4321
pnpm build     # 构建到 dist/
```

## 自定义

所有个人信息和作品系列都在 [src/config/site.ts](src/config/site.ts)：

- `SITE.name` / `SITE.nameEn`：姓名
- `SITE.email` / `SITE.xiaohongshu`：联系方式（小红书主页）
- `WORK_SERIES`：Works 下的系列列表（标题、英文名、介绍文字、目录 slug），可增删

## 添加照片

```
src/photos/
├── home/          ← 首页全屏轮播
├── about/         ← About 页面照片
├── series-01/     ← 「学校」页面
├── series-02/     ← 「物质」页面
└── series-03/     ← 「探索时期」页面
```

把照片放进对应文件夹即可，开发模式刷新或重新构建后自动显示。占位图为 `home/` 下的 svg，换成真实照片后删除即可。

## 部署（免费）

### 方式一：GitHub Pages

1. 新建 GitHub 仓库并把代码推上去（`main` 分支）
2. 仓库 Settings → Pages → Source 选择 **GitHub Actions**
3. 之后每次 push 自动构建部署

如果仓库不是 `用户名.github.io`，构建时设置 base：

```bash
ASTRO_BASE=/仓库名/ pnpm build
```

### 方式二：Vercel

1. 用 GitHub 登录 vercel.com
2. Add New Project → Import 这个仓库
3. Framework 选 **Astro**，点击 Deploy
4. 之后每次 push 自动部署
