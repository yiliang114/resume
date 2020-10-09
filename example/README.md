<h1>
  <span>易良</span>
  <ul>
    <li><span>男</span>1995.12</li>
    <li><span>QQ</span>1144323068</li>
    <li><span>邮箱</span><a href="mailto:1144323068@qq.com">1144323068@qq.com</a></li>
    <li><span>Github</span><a>github.com/yiliang114</a></li>
    <li><span>更新时间</span>2020-07-12</li>
  </ul>
</h1>

## 教育经历

本科 浙江工业大学 软件工程 <span class="right">2014.09 - 2018.06</span>

## 工作经历

深圳腾讯科技有限公司 CSIG Web 前端开发<span class="right">2018.6 - 至今</span>

深圳腾讯科技有限公司 SNG Web 前端开发 实习<span class="right">2017.11 - 2018.6 </span>

杭州溪居科技有限公司(初创) 技术部门 研发、产品经理<span class="right">2017.02 - 2017.06</span><br>

## 项目经验

### 2017.11 - 2018.10 SNG 智能终端研发中⼼

腾讯云⼩小微 (2018.6 应届毕业)

负责内容:

1. [小微技能开放平台](https://xiaowei.tencent.com/skill.html), [小微硬件开放平台](https://xiaowei.tencent.com/hardware.html): 基于 React + Redux 全家桶的项⽬目，⽤用于不不同场景、不不同硬件 交互的配置。

2. 小微运营平台: 基于 vue-cli@2.x 脚⼿手架搭建的项⽬目，⽤用于内部运营数据的展示、开发者权限的审 核，同样也是智能对话内容标注平台等等。负责了了整个平台的搭建，⼏几乎全部的前端业务代码，以 及后期的项⽬目性能优化等⼯工作，配合公司的 qci 持续集成⼯工具完善了了原有开发、部署流程。

3. 小微 APP Vue Hybrid H5:基于 vue 的多⻚页应⽤用，涉及到 app 内的所有 Hybrid H5 ⻚页⾯面。主要负 责了了⼩小微 app 的⾳音乐资源⻚页、⾳音乐会员购买⻚页。

### 2018.10 - 2020.03 CSIG 云产品部 大数据与人⼯智能中⼼

腾讯智能对话平台 TBP

负责内容:

1. vue 技术栈的腾讯云官网控制台，腾讯云智能机器人对话平台。[链接](https://console.cloud.tencent.com/tbp)基于 vue + vuex 的单页应用。不同于普通的 vue 全家桶，腾讯云控制台由于历史悠久、业务众多，主技术栈是古老的 seajs， 不能使用 vue-router 来接管路由。通过 webpack 将 vue 项目打包出一个可供 seajs 加载的 js 模块来实现新旧技术栈共生。

2. vuex 插件： generate-vuex。对于每一个异步请求，只需要写一个 action ，插件能够自动生成 getter 和 mutation， 以及会将整个请求从开始到结束的完整状态都维护在 state 中，用于让开发者写 vuex 更快更简单。

3. tbp 小程序、小程序插件。维护和重构， 小程序插件以及文档的维护和更新，并积极在 qq 交流群中对接有 web h5 或者小程序接入的客户， 结合客户的前端需求，为 tbp 的迭代和专项提了一些需求。

4. tbp 组内图床工具：一个用 node 简单封装了 cos sdk 的图床工具，蓝盾+ nodejs + docker + stke + vue

5. tbp 错误日志收集工具方案的落地和开发：在客户使用控制台、h5、小程序遇到问题，难以收集后台同学排查需要的 requestid。这个工具打通了客户端以及企业微信，只要用户触发暗门，客户端的 requestid 日志即可自动推送到 tbp 开发的企业微信中。解决难以收集用户出现错误的 requestid 的痛点，用户只需触发暗门，requestid 将自动发送到我们指定的企业微信中。

6. tbp 对内、对外文档中心框架搭建。 基于 vuepress + qci 自动部署组内文档，通过不同的分支进行分开管理内外网文档的权限。 团队所有沉淀的文档和 wiki 指引都只要开发同学提供 markdown 文件，提交 git 之后即可快速生成文档。
7. tbp 通用 h5 页面。 [链接](https://tbp.cloud.tencent.com/tbp-h5-v2/?AgentId=f+kMfPU1Bm9zjnm6h7c09s4eGGW0iLMQqNuR+S86jT7hN/uvEn7WnlHc+XLpj78nBVkxhq2y6JRTBTE1YCxKNV/w3CatCyAsT0N3CBEgnHs=) h5 完成两个大版本的迭代，1.0 版本仅服务于上海开放大学；2.0 版本经过改版之后使得客户能够 0 成本快速接入，有新客户接入开发 0 改动。 目前已服务企鹅电竞、上海开放大学两个客户。

8. 参与了腾讯前端开源框架 omi，提了一些 commit， 主要负责 omiv 。omiv 是一个用 omi 的思想触发更新渲染的状态管理工具，为 vue 组件传入一个作为 store 的属性（ store 包含 state 以及修改 state 的一些方法），store 全局会依赖收集，依赖 store 中的变量的 vue 实例。再利用 obaa 监听 js 对象和数组的能力，使得被观察的值变化的时候，从全局依赖列表中取出组件，自动执行 `$forceUpdate` 函数进行更新。 与 Vuex 相比的优势是： 由于 obaa 的能力，omiv 可以监听到通过数组下标修改值和数组 size 的变化；另外减少了 vuex 很多的约束，能够更灵活修改状态。

### 2020.03 - 至今 CSIG 云产品部 数据平台中心 数据平台组

负责内容：

1. 高管驾驶舱， 一个移动端数据可视化的大盘、报表系统。
2. 企业罗盘（公司内部）小程序，承载部门业务的容器入口。
3. 企业罗盘 pc 端、移动端 vue 的组件库。部分组件参考业界知名的 ui 组件库（ant-design-vue 以及 vant）, 再基于业务沉淀团队常用的组件。
4. 建立完善的前端 ci/cd 流水线，推动前端团队相关的各种规范，包括 git, eslint 以及文档的相关规范等等。

<!-- 5. 参与网关和权限的 node 中台项目，以及为了提高移动端 h5 渲染性能而抽离的 BFF 层（node） -->

## 技术栈

1. 熟悉 vue vuex vue-router， 了解 vue vuex vue-router 部分实现原理。
2. 了解 react 技术栈，有实际项目经验， 阅读过 react 源码。
3. 了解 nodejs，有 express, koa 搭建的后台项目经验。

## 自我评价

- 愿意主动去承担更多的事情来赋能业务，持续打磨自己
- 非常愿意参与到产品中去
- 独自负责过很复杂的前端项目
- 对技术保持热情

## 其他

### github

[链接](https://github.com/yiliang114)

### blog

- [github blog](https://github.com/yiliang114/Blog)
- [csdn](https://blog.csdn.net/GreekMrzzJ)
- [yiliang.site](https://yiliang.site)
