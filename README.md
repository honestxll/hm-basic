# 说明

这是一个基于 `Vite` + `Vue3` + `Pinia` + `Vue-Router` 的基础模板，项目使用 `prettier` 做代码格式化，请大家开发的时候保持统一的代码格式化，避免在开发的时候因为不同的代码风格导致代码冲突。

另外和以往项目不同的是，我们把项目的配置放到了 `.env` 文件里，而不是像以前的项目写在了 `config/index.js` 文件里，写在 `.env` 文件里的好处是避免了因为来回的修改 `config/index.js` 文件产生了多余的 `git` 记录，`.env` 文件默认是被 `git` 忽略掉的，所以项目初始化完成后需要手动复现一份出来。

# 项目初始化

```bash
cd project
npm i
cp .env.example .env
```

# 关于插件、前端库

因为项目不同所需要使用的插件和库也不一样，所以项目里就不做集成了，项目里只集成的常用一些函数和正则等，如下

| 工具名 | 说明                                                        | 地址                                 |
| ------ | ----------------------------------------------------------- | ------------------------------------ |
| lodash | Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库 | https://www.npmjs.com/package/lodash |
| vue-ls | vue 的本地存储库                                            | https://www.npmjs.com/package/vue-ls |
| reg    | 常用的正则表达式                                            | src/utils/reg.ts                     |
| axios  | http 请求库                                                 | https://www.npmjs.com/package/axios  |
| dayjs  | 轻量的时间格式化库                                          | https://www.npmjs.com/package/dayjs  |
| mockjs | 前端模拟生成接口数据                                        | https://www.npmjs.com/package/mockjs |

下面为大家整理了常用的前端库，大家可以根据自己的需求来安装集成。

## UI 库

PC 这里只推荐三个大厂的 UI 库，需要注意的是 `arco` 是支持服务端渲染 `ssr` 的。

| 名           | 说明                                                       | 地址                                  |
| ------------ | ---------------------------------------------------------- | ------------------------------------- |
| element-plus | 这个库可以说是国内前端用的最多的了，最容易上手             | https://element-plus.gitee.io/zh-CN/  |
| antd         | 蚂蚁金服的前端框架，由 React 到 Angular 再到 Vue，比较可靠 | https://antdv.com/components/overview |
| arco         | 字节的 UI 库，有 React 和 Vue 版本                         | https://arco.design/                  |

H5 的话推荐使用 `Vant`

| 名   | 说明           | 地址                                                       |
| ---- | -------------- | ---------------------------------------------------------- |
| vant | 由有赞公司开发 | https://vant-contrib.gitee.io/vant/#/zh-CN/release-note-v4 |

# 分享
