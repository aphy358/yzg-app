

react 项目搭建步骤：

1、先按照 Create React App 搭建好，然后运行 npm run eject，可以把配置项弹出到主目录一级，方便配置。

2、安装插件 cnpm install，再安装自己需要的其他插件：less-loader、node-sass、react-redux、react-router、react-router-redux、redux、redux-actions、redux-thunk、sass-loader、antd 等等。安装 antd 需要引入样式：import 'antd/dist/antd.css'; 

3、分别在 webpack.config.dev.js、webpack.config.prod.js 里面配置好 less-loader、sass-loader 等选项。

4、使用装饰器的时候，visual studio code 总是报错：....设置 "experimentalDecorators" 选项以删除此警告。
解决方案(https://www.cnblogs.com/zhiyingzhou/p/7619962.html) 

5、装饰器的配置，先安装包：cnpm install babel-plugin-transform-decorators-legacy --save-dev ，然后编写.babelrc文件。具体参考(https://blog.csdn.net/frank_come/article/details/79981498)

6、理解 redux-actions 的用法，参考(https://my.oschina.net/tbd/blog/1648601)

7、删除 src 下的 APP.css、APP.js 等文件，只留下 index.js ，将 https://github.com/jackielii/simplest-redux-example/blob/master/index.js 里的代码复制到 index.js 运行，这就是最简单的 redux 例子了，然后再在此基础上分化、演变、延伸，分别可独立出这么几个文件夹：actions、api、layout、middlewares、pages、reducers、store、static 等等。

8、先创建 pages 文件夹，文件夹下又创建一子目录 first，将 App 组件独立成一个页面内容(后期可丰富其内容)，大约需要引用 React、Component、connect、{action} 等等。

9、再创建 actions 文件夹，文件夹下创建 action 文件 first，将 App 组件用到的 action 移动到该目录下，后续用到该 action 的组件即可引用。每个 action 文件又可引用组件 redux-actions 对 action 的创建进行简化。

10、创建 reducers 文件夹，文件夹下创建 reducer 文件 first 和 index，普通 reducer 文件里可以引入 handleActions 以简化代码。index 里面引入 combineReducers 把所有 reducer 整合，再 export 出去。

11、再接下来将 index.js 里的 <App/> 组件替换成路由 <Routes />，在根目录下新建 routes.js 文件，引入相关包 { Router, Route, IndexRoute } 等，这里用的是 react-router@3.2.1 的版本，然后是路由的布局，可以设置公共部分的页眉、页脚、nav等，然后页面内容展示在一个固定的位置，比如右边，通过路由的切换显示不同的页面内容( hashHistory.push(path) )。

12、有时候会报一个 history 的错：Module not found: Can't resolve 'history/lib/createHashHistory' ，解决方案是安装： cnpm i history@3.2.1，如果版本太高也不行。其实 react-router 本来是自带这个包的，但是怎么搞也没用，只能另行安装了。












其他笔记：

关于Create React App不支持装饰器的终极无伤解决方案参考(https://juejin.im/post/59faf3975188254eaf27ea71)

webpack.config.dev.js
点开package.json文件，可看到配置的命令是以 "react-scripts *" 来执行，所以打开node_modules文件夹，找到react-scripts文件夹进去， config目录即是你需要找的webpack的配置文件

ES6学习(https://www.jianshu.com/p/287e0bb867ae) 

