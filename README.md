# 开发阿雷个人博客：首页视觉原型

这是基于产品需求文档制作的 React + Vite 首页 MVP **视觉原型**。它用于比较首页的信息层级与视觉方向，不是正式生产站点。

## 环境要求

- [Node.js](https://nodejs.org/) 20 或更高版本
- npm（随 Node.js 一并安装）

## 启动方式

在项目根目录执行：

```bash
npm install
npm run dev
```

命令行会显示本地访问地址，通常是：

```text
http://localhost:5173
```

浏览器打开后默认展示方案 B（独立杂志长卷）。若端口已被占用，Vite 会自动使用另一个可用端口，请以终端实际输出为准。

## 三种首页方案

通过 URL 参数 `variant` 切换布局：

| 方案 | 地址 | 设计方向 |
| --- | --- | --- |
| A | `http://localhost:5173/?variant=A` | 编辑部双栏：大 Banner 配推荐目录，强调内容发现。 |
| B | `http://localhost:5173/?variant=B` | 独立杂志长卷：强化叙事与个人表达。 |
| C | `http://localhost:5173/?variant=C` | 公告板网格：优先展示作品与信息密度。 |

开发环境底部会显示方案切换条，也可使用键盘左右方向键切换。切换条不会包含在生产构建中。

## 常用命令

```bash
# 启动开发服务器（支持热更新）
npm run dev

# 构建生产静态文件到 dist/
npm run build

# 本地预览构建结果
npm run preview
```

## 已实现内容

- 米白、森林绿、黑色的新粗野主义 / 独立杂志视觉系统
- 响应式导航与移动端菜单
- 支持自动播放、手动切换与键盘操作的推荐 Banner
- 文章、作品、个人介绍、动态、投资观察、书签、友链与合作模块
- 本地中文示例数据；真实 Logo、头像、文章和外部账号链接均为占位内容

## 演示图片素材

方案 B 的 Banner 与作品卡使用了 [Unsplash](https://unsplash.com/) 的公开图片 CDN 作为演示素材。Unsplash 声明其图片可免费用于商业与非商业用途；正式上线前建议按实际素材逐一复核来源与许可：[Unsplash License](https://unsplash.com/license)。

## 项目结构

```text
src/
  main.jsx                 # 组件、演示内容、Banner 与方案切换逻辑
  prototype-home.css       # 三种方案及响应式样式
  themes/
    magazine-green.css     # 当前“纸张绿刊”主题 token
    README.md              # 新增主题的约定
docs/
  开发阿雷个人博客_PRD.md  # 原始产品需求文档
```

## 原型说明

在选定方案前，可以直接修改 `src/main.jsx` 顶部的数据常量替换演示内容。确定方向后，建议将被选中的方案按正式工程标准重构为生产页面，并移除其余原型方案和底部切换器。
