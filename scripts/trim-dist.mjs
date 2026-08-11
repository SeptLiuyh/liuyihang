// 构建后清理 dist 里的原始图片（只保留压缩后的 webp/svg）
import { readdir, unlink } from "node:fs/promises";
import { join } from "node:path";

const dir = join(process.cwd(), "dist", "_astro");
const REMOVE = /\.(jpe?g|png|gif|tiff?)$/i;
let removed = 0;

for (const file of await readdir(dir)) {
  if (REMOVE.test(file)) {
    await unlink(join(dir, file));
    removed++;
  }
}

console.log(`已清理 ${removed} 个原始图片文件`);
