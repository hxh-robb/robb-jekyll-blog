---
title: 制作单词听写小工具
author: robb
date: 2019-05-14 11:40 +0800
ongoing: true
tag: showcase
---
学习新单词时, 有必要在课后做听写练习, 因此打算通过调用[第三方提供的tts服务](https://responsivevoice.org/)来实现一个单词听写页面;

---

## 词库
我希望在听写单词时, 能同时听到该单词对应的例句, 基于单词检索例句有很多解决办法, 例如实时的去请求google检索例句, 比较简单的做法是自己预先准备好包含例句的词库;

我一直使用的英语辞典工具是Chrome的应用插件[OALD7](https://chrome.google.com/webstore/detail/oald-7-牛津高阶第七版/adodeopedjkoofdbblibackjdklbnepe), 该应用的作者依照牛津高阶中英词典整理了包含五万多个单词条目的明文数据文件, 一行一个单词, 其中包含了单词的性质和例句; 因为是基于html的明文文件, 内容充实且结构分明, 可以简单地通过编写脚本来解析处理作二次加工, 正好符合我的需要;

我直接到Chrome的目录将这些文件拷出来:
```bash
#### 拷贝OALD7的数据文件 ####
# OALD7数据文件所在目录
cd ~/.config/google-chrome/Default/Extensions/adodeopedjkoofdbblibackjdklbnepe/2.3.0_0/data 
# 将所有文件集中输出到的单个文件
cat *.dat > /tmp/vocabulary.data
```

**TODO:** 后续再分析一下单词条目的组成结构, 写一些脚本解构它们适配成Jekyll的yaml数据文件, 作为这个听写小工具的数据基础;

## TODO
