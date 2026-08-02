# 主题约定

每个主题文件只负责声明 CSS 自定义属性（design tokens），组件和布局样式继续使用 `src/prototype-home.css`。

1. 复制 `magazine-green.css`，例如创建 `night-blue.css`。
2. 修改颜色、边框、图片滤镜等 token。
3. 在 `src/main.jsx` 的 `.page` 元素上切换主题类名。

这样可在不改动页面结构的情况下，增加多套可切换主题。
