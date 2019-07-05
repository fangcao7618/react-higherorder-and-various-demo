
yarn add @babel/plugin-transform-react-jsx-source -D
yarn add @babel/plugin-transform-react-jsx-self -D


yarn add @babel/plugin-proposal-decorators -D

背景：react 项目 + babel 7 + 使用到装饰器
1、安装以下插件

	npm install -D @babel/plugin-proposal-decorators
2、配置.babelrc 文件或package.json文件的 babel 字段值（两者二选一，不要都配置，否者会报找到两个配置文件的错）
（1）配置 .babelrc 文件

 "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
  ]
1
2
3
（2）配置 package.json 文件的 babel 字段值

 babel: {
	"plugins": [
	    ["@babel/plugin-proposal-decorators", { "legacy": true }],
	 ]
  }
