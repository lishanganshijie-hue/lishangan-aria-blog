一个基于 [Astro](https://astro.build) 构建的个人博客、作品集模板，简洁优雅，功能完善。

这是 [aria](https://github.com/static-templates/aria) 模板的 Astro 移植版本。

![image-20260114113755922](assets/image-20260114113755922.png)

预览地址：https://www.aiheadn.cn/

## ✨ 特性

- 🚀 **基于 Astro** - 使用 Astro 构建，性能优异，SEO 友好
- 🎨 **现代化设计** - 简洁优雅的 UI 设计，支持深色模式
- 📱 **响应式布局** - 完美适配各种设备尺寸
- 📝 **Markdown 支持** - 使用 Markdown 编写博客文章
- 🎯 **多页面功能** - 首页、关于、项目、博客、资源等页面
- ⚡ **快速加载** - 静态站点生成，加载速度快
- 🛠️ **易于定制** - 基于 JSON 配置，方便修改内容

## 📦 安装

使用 Astro CLI 创建项目：

```bash
npm create astro@latest -- --template ccbikai/astro-aria
```

或者克隆此仓库：

```bash
git clone https://github.com/ccbikai/astro-aria.git
cd astro-aria
npm install
```

## 🚀 快速开始

### 开发

启动开发服务器：

```bash
npm run dev
```

访问 `http://localhost:4321` 查看效果。

### 构建

构建生产版本：

```bash
npm run build
```

### 预览

预览构建后的站点：

```bash
npm run preview
```

## 📁 项目结构

```
├── public/              # 静态资源文件
│   └── assets/         # 图片、图标等资源
├── src/
│   ├── assets/         # CSS、JS 等资源
│   ├── collections/    # JSON 数据文件
│   │   ├── experiences.json  # 工作经历
│   │   ├── menu.json         # 导航菜单
│   │   ├── projects.json     # 项目列表
│   │   ├── resources.json    # 资源链接
│   │   ├── skills.json       # 技能列表
│   │   └── web.json          # Web 工具
│   ├── components/     # Astro 组件
│   ├── content/        # Markdown 博客文章
│   ├── layouts/        # 页面布局
│   └── pages/          # 页面路由
├── astro.config.mjs    # Astro 配置文件
├── tailwind.config.mjs # Tailwind CSS 配置
└── package.json
```

## 🎨 自定义配置

### 修改个人信息

编辑 `src/pages/index.astro` 修改首页的个人介绍。

### 添加项目

在 `src/collections/projects.json` 中添加项目信息：

```json
{
  "name": "项目名称",
  "description": "项目描述",
  "image": "/assets/images/projects/project.webp",
  "url": "/post/project-slug"
}
```

### 添加博客文章

在 `src/content/post/` 目录下创建 Markdown 文件，文件名将作为 URL slug。

### 修改导航菜单

编辑 `src/collections/menu.json` 自定义导航菜单。

### 修改资源链接

编辑 `src/collections/resources.json` 添加或修改资源链接。

## 🛠️ 技术栈

- [Astro](https://astro.build) - 静态站点生成框架
- [Tailwind CSS](https://tailwindcss.com) - 实用优先的 CSS 框架
- [TypeScript](https://www.typescriptlang.org) - 类型安全的 JavaScript
- [Biome](https://biomejs.dev) - 代码格式化工具

## 📝 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 🙏 致谢

- 原模板：[aria](https://github.com/static-templates/aria)
- [Astro](https://astro.build) 团队

## 📄 更新日志

### v0.0.1
- 初始版本
- 基础页面和功能实现
