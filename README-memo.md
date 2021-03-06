# 学习做自己的react 组件库
- 跟着别人写没什么技术含量。

## 是否要去纠结文件结构
- [推文](http://img9.doubanio.com/view/status/l/public/8805ccc33abd9c6.webp)
- 文件结构太复杂然后导入组件'../../../../../../../../'，就是说想太多了
- [react官方文档的文件结构](https://reactjs.org/docs/faq-structure.html)
    + 分成2种类型。
- 总结下来，如果思考超过5分钟，就不要去纠结这种问题，在实际开发的过程中去改善是最好的。

## 为代码添加规则让项目更规范
- [规则](https://www.npmjs.com/package/eslint-config-react-app)
- [给IDE添加规则](https://create-react-app.dev/docs/setting-up-your-editor/)
    + 每次看都不一样，实时的在更新，用vscode就在当前项目中加一个.vscode文件夹，并按照说明加入配置文件。就能让vscode帮你检查代码了。

## 样式的解决方案
- inlineCss -React官网 效率低
- cssInJs   -React官网 中立
- Styled Component -一般的方案
- Sass/Less  -运用最广泛 《- 我用这个方案

## 创建自己的色彩体系
- 系统色板 - 基础色板 + 中性色板
- 产品色板 - 品牌色 + 功能色板
- _variables.scss 中设定 !default ，用户可以覆盖主题色

## normalize.css
- _reboots.scss 解决多游览器的兼容问题。

- 淘宝仓库
    + registry https://registry.npm.taobao.org/

- [fontawesome](https://github.com/FortAwesome/react-fontawesome)（免费的图标字体库）

- [findDOMNode 功能废止](https://reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage)

## 现在请求服务器测试平台
- https://jsonplaceholder.typicode.com/

## 自定义钩子
- 这门课让我学会了自定义钩子，必须用use开头，直接复制原来代码的逻辑

## 