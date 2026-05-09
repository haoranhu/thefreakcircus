# The Freak Circus — Static Guide (Eleventy)

这是 The Freak Circus 的非官方静态指南站骨架（Eleventy）。内容位于 `content/` 文件夹，生成到 `_site/`，方便部署到 Cloudflare Pages。

快速开始

1. 安装依赖：

```bash
npm install
```

2. 本地开发（带热加载）：

```bash
npm run start
```

3. 生产构建：

```bash
npm run build
```

Cloudflare Pages 部署设置

- Build command: `npm run build`
- Build output directory: `_site`
- Node.js 版本: 推荐 `18.x`（可在 Pages 设置中指定）

注意事项

- 本站为非官方指南，所有外链应指向官方 itch.io 或作者 devlog。
- 如需自定义模板或布局，请在 `content/_includes` 下添加对应的模板文件，并在 Markdown 中使用 `layout` frontmatter 指定。
