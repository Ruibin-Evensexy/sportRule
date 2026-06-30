# SportRule 运动规则说明

这是一个使用 Astro 创建的运动规则说明 Web 应用，主题为官方运动规则指南，面向游泳、篮球、足球、网球、羽毛球等项目，并支持持续添加新的运动规则说明。

## 功能

- 主页展示运动规则导航与运动卡片入口
- 运动规则详情页展示每个运动的官方要点说明
- 响应式顶部导航栏，兼容桌面与移动设备
- 数据驱动规则库，便于新增和维护运动项目

## 文件结构

- `package.json`：项目依赖与脚本
- `astro.config.mjs`：Astro 基本配置
- `tsconfig.json`：TypeScript 配置
- `src/data/sports.ts`：运动规则数据源
- `src/pages/index.astro`：主页
- `src/pages/sports.astro`：运动导航页
- `src/pages/sports/[slug].astro`：运动规则详情页
- `src/pages/about.astro`：关于页面
- `src/components/Navbar.astro`：响应式导航组件
- `src/layouts/BaseLayout.astro`：统一布局
- `src/styles/global.css`：全局样式与响应式布局

## 本地运行

```bash
npm install
npm run dev
```

然后访问 `http://localhost:3000`。

## 说明

该项目演示了 Astro 的基本页面路由和组件用法，适合用于快速搭建静态网站或轻量型应用。