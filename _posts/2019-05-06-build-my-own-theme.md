---
title: 制作Jekyll自定义主题
author: robb
date: 2019-05-06 12:28 +0800
ongoing: true
---
刚部署起来的Blog还未引用任何主题, 显得空荡荡的; 在Jekyll官网上推荐了许多风格不错的主题, 但我还是打算基于官方提供的默认主题minima制作一个自定义的主题来练手, 其实也是为了学习Jekyll, 希望这个任务可以控制在一个星期完成; 等对Jekyll有一定程度的了解后再开始引用和学习别人制作的主题;

---

## TO BE CONTINUED
* 实现步骤
  * minima主题
    * 应用minima至无主题Jekyll网站
    * 调整minima参数
    * 增加自定义样式
    * 增加自定义页面
  * 自定义主题
    * TODO

---

## 进度回顾

<details>
  <summary>2019-05-06</summary>

* [Jekyll Tutorial](https://jekyllrb.com/tutorials/home/)
  * 15:15 - [4.Creating a Site](https://www.youtube.com/watch?v=pxua_1vyFck&index=4&list=PLLAZ4kZ9dFpOPV5C5Ay0pHaa0RJFhcmcB)
  * 16:10 - [5.Front Matter](https://www.youtube.com/watch?v=ZtEbGztktvc&index=5&list=PLLAZ4kZ9dFpOPV5C5Ay0pHaa0RJFhcmcB)
  * 17:07 - [6.Writing Posts](https://www.youtube.com/watch?v=gsYqPL9EFwQ&list=PLLAZ4kZ9dFpOPV5C5Ay0pHaa0RJFhcmcB&index=6)
  * 17:17 - [7.Working With Drafts](https://www.youtube.com/watch?v=X8jXkW3k2Jg&index=7&list=PLLAZ4kZ9dFpOPV5C5Ay0pHaa0RJFhcmcB)
  * 18:00 - [8.Creating Pages](https://www.youtube.com/watch?v=1na-IWfv08M&index=8&list=PLLAZ4kZ9dFpOPV5C5Ay0pHaa0RJFhcmcB)
* 自定义主题设计草图
  * ![custom-theme-design](/assets/img/custom-theme-design.png)

</details>

<details>
  <summary>2019-05-07</summary>

* [Jekyll Tutorial](https://jekyllrb.com/tutorials/home/)
  * 13:11 - [9.Permalinks](https://www.youtube.com/watch?v=938jDG_YPdc&list=PLLAZ4kZ9dFpOPV5C5Ay0pHaa0RJFhcmcB&index=9)
  * 14:59 - [10.Front Matter Defaults](https://www.youtube.com/watch?v=CLCaJJ1zUHU&index=10&list=PLLAZ4kZ9dFpOPV5C5Ay0pHaa0RJFhcmcB)
  * 15:26 - [11.Themes](https://www.youtube.com/watch?v=NoRS2D-cyko&list=PLLAZ4kZ9dFpOPV5C5Ay0pHaa0RJFhcmcB&index=11)
  * 16:04 - [12.Layouts](https://www.youtube.com/watch?v=bDQsGdCWv4I&list=PLLAZ4kZ9dFpOPV5C5Ay0pHaa0RJFhcmcB&index=12)
  * 后续章节与 [Step by Step](https://jekyllrb.com/docs/step-by-step/01-setup/) 类似, 跳过;
* 基于 [minina](https://github.com/jekyll/minima), 实现草图原型

</details>

<details>
  <summary>2019-05-08 ~ 2019-05-14</summary>

* 应用minima主题;
* 自定义样式(_sass/custom-override.scss);
* 切换markdown风格至CommonMarkGhPages, 以友好支持details标签;

</details>