(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{617:function(t,v,_){"use strict";_.r(v);var a=_(7),e=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("div",{staticClass:"custom-block tip"},[_("p",[t._v("网上的 npm 教程主要都在讲怎么安装、配置和使用 npm，却不告诉新人「为什么要使用 npm」，今天就来探讨一下npm 到底是什么。")]),t._v(" "),_("div",{staticClass:"custom-block right"},[_("p",[t._v("转载自 "),_("a",{attrs:{href:"https://www.bilibili.com/read/cv6438307",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文地址"),_("OutboundLink")],1)])])]),t._v(" "),_("h2",{attrs:{id:"社区概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#社区概念"}},[t._v("#")]),t._v(" 社区概念")]),t._v(" "),_("p",[t._v("程序员自古以来就有社区文化：")]),t._v(" "),_("p",[t._v("社区的意思是：拥有共同职业或兴趣的人们，自发组织在一起，通过分享信息和资源进行 合作。虚拟社区的参与者经常会在线讨论相关话题，或访问某些网站。")]),t._v(" "),_("p",[t._v("前端程序员当然也有社区，世界上最大的前端社区应该就是 GitHub 了，同样非常有名的还有国内开源中国的码云。前端通过 GitHub 来")]),t._v(" "),_("ol",[_("li",[t._v("分享源代码（线上代码仓库）")]),t._v(" "),_("li",[t._v("寻找需要的开源项目及讨论问题（Issue 列表）")]),t._v(" "),_("li",[t._v("收集学习资源和常去的网站")])]),t._v(" "),_("p",[t._v("加入社区最大的好处之一是，你可以使用别人贡献的代码，你也可以贡献代码给别人用。")]),t._v(" "),_("hr"),t._v(" "),_("h2",{attrs:{id:"共享代码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#共享代码"}},[t._v("#")]),t._v(" 共享代码")]),t._v(" "),_("p",[t._v("我们在开发的过程中，往往都需要多人合作，或者其他情况下需要共享代码。在 GitHub 还没有兴起的年代，前端是通过网址来共享代码")]),t._v(" "),_("p",[t._v("比如你想使用 jQuery，那么你点击 jQuery 网站上提供的链接就可以下载 jQuery，放到自己 的网站上使用，或者引入在线的映射文件，在GItHub 兴起之后，社区中也有人使用 GitHub 的下载功能：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://oss.yitian2019.cn/img/image-20200617080411109.png",alt:"image-20200617080411109"}})]),t._v(" "),_("p",[t._v("当一个网站依赖的代码越来越多，程序员发现这是一件很麻烦的事情：")]),t._v(" "),_("ol",[_("li",[t._v("去 jQuery 官网下载 jQuery")]),t._v(" "),_("li",[t._v("去 BootStrap 官网下载 BootStrap")]),t._v(" "),_("li",[t._v("去 Underscore 官网下载 Underscore")]),t._v(" "),_("li",[t._v("……")])]),t._v(" "),_("p",[t._v("有些程序员就受不鸟了，一个拥有三大美德的程序员 "),_("a",{attrs:{href:"https://github.com/isaacs",target:"_blank",rel:"noopener noreferrer"}},[t._v("Isaac Z. Schlueter"),_("OutboundLink")],1),t._v(" （以下简称 Isaaz） 给出一个解决方案：用一个工具把这些代码集中到一起来管理吧！")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("程序员三大美德")]),t._v(" "),_("p",[t._v("懒惰：")]),t._v(" "),_("p",[t._v("是这样一种品质，它使得你花大力气去避免消耗过多的精力。它敦促你写出节省体力的程序，同时别人也能利用它们。为此你会写出完善的文档，以免别人问你太多问题。")]),t._v(" "),_("p",[t._v("急躁：")]),t._v(" "),_("p",[t._v("是这样一种愤怒----当你发现计算机懒洋洋地不给出结果。于是你写出更优秀的代码，能尽快真正的解决问题。至少看上去是这样。")]),t._v(" "),_("p",[t._v("傲慢：")]),t._v(" "),_("p",[t._v("极度的自信，使你有信心写出（或维护）别人挑不出毛病的程序。")])]),t._v(" "),_("hr"),t._v(" "),_("h2",{attrs:{id:"初始步骤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#初始步骤"}},[t._v("#")]),t._v(" 初始步骤")]),t._v(" "),_("p",[t._v("npm 就是Isaaz 用 JavaScript （运行在 Node.js 上）写的 npm，全称是 Node Package Manager")]),t._v(" "),_("p",[t._v("NPM 的思路大概是这样的：")]),t._v(" "),_("ol",[_("li",[t._v("买个服务器作为代码仓库（registry），在里面放所有需要被共享的代码")]),t._v(" "),_("li",[t._v("发邮件通知 jQuery、Bootstrap、Underscore 作者使用 npm publish 把代码提交到 registry 上，分别取名 jquery、bootstrap 和 underscore（注意大小写）")]),t._v(" "),_("li",[t._v("社区里的其他人如果想使用这些代码，就把 jquery、bootstrap 和 underscore 写到 package.json 里，然后运行 npm install ，npm 就会帮他们下载代码")]),t._v(" "),_("li",[t._v("下载完的代码出现在 node_modules 目录里，可以随意使用了")])]),t._v(" "),_("p",[t._v("这些可以被使用的代码被叫做「包」（package），这就是 NPM 名字的由来：Node Package(包) Manager(管理器)。")]),t._v(" "),_("hr"),t._v(" "),_("h2",{attrs:{id:"初始发展"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#初始发展"}},[t._v("#")]),t._v(" 初始发展")]),t._v(" "),_("p",[t._v("Isaaz 通知 jQuery 作者 John Resig，他会答应吗？这事儿不一定啊，对不对。")]),t._v(" "),_("p",[t._v("只有社区里的人都觉得 「npm 是个宝」的时候，John Resig 才会考虑使用 npm。")]),t._v(" "),_("p",[t._v("那么 npm 是怎么火的呢？ npm 的发展是跟 Node.js 的发展相辅相成的。")]),t._v(" "),_("p",[t._v("Node.js 是由一个在德国工作的美国程序员 Ryan Dahl 写的。他写了 Node.js，但是 Node.js 缺少一个包管理器，于是他和 npm 的作者一拍即合、抱团取暖，最终 Node.js 内置了 npm。")]),t._v(" "),_("p",[t._v("后来的事情大家都知道，Node.js 火了。 随着 Node.js 的火爆，大家开始用 npm 来共享 JS 代码了，于是 jQuery 作者也将 jQuery 发 布到 npm 了。")]),t._v(" "),_("p",[t._v("所以现在，你可以使用 npm install jquery 来下载 jQuery 代码。")]),t._v(" "),_("p",[t._v("现在用 npm 来分享代码已经成了前端的标配。")]),t._v(" "),_("hr"),t._v(" "),_("h2",{attrs:{id:"后续发展"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#后续发展"}},[t._v("#")]),t._v(" 后续发展")]),t._v(" "),_("p",[t._v("Node.js 目前由 Ryan Dahl 当时所在的公司 joyent 继续开发。")]),t._v(" "),_("p",[t._v("Ryan Dahl 现在已经去研究 AI 和机器学习了，并且他把 Node.js 的维护权交给了 Isaaz。（我们是不是也应该去研究 AI 和 机器学习啊教练）")]),t._v(" "),_("p",[t._v("而 Isaaz 维护了一段时间后，辞职了，成立了一个公司专门维护 npm 的 registry，公司名叫 做 "),_("a",{attrs:{href:"https://www.npmjs.com/about#about-npm-inc",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm 股份有限公司"),_("OutboundLink")],1),t._v("……谁说开源不能赚钱的~")]),t._v(" "),_("p",[t._v("Node.js 的维护权交至了 Isaaz")]),t._v(" "),_("hr"),t._v(" "),_("h2",{attrs:{id:"社区的力量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#社区的力量"}},[t._v("#")]),t._v(" 社区的力量")]),t._v(" "),_("p",[t._v("回顾前端的发展是你会发现，都是社区里的某个人，发布了一份代码，最终影响前端几年的走向。")]),t._v(" "),_("p",[t._v("比如 jQuery，比如 Node.js，比如 npm。（其实其他语言也是这样的）")]),t._v(" "),_("p",[t._v("所以，社区的力量是巨大的。")])])}),[],!1,null,null,null);v.default=e.exports}}]);