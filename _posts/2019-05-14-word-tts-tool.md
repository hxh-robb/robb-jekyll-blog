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

### 拷贝词库数据文件(Bash)
```bash
#### 拷贝OALD7的数据文件 ####
# OALD7数据文件所在目录
cd ~/.config/google-chrome/Default/Extensions/adodeopedjkoofdbblibackjdklbnepe/2.3.0_0/data 
# 将所有文件集中输出到的单个文件
cat *.dat > /tmp/vocabulary.data
```
### 分析数据文件样式
<table>
  <thead>
    <tr>
      <th>样式</th>
      <th>含义</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>od_d</td>
      <td>英文释义</td>
    </tr>
    <tr>
      <td>od_x</td>
      <td>英文例句</td>
    </tr>
    <tr>
      <td>od_chn</td>
      <td>中文翻译</td>
    </tr>
  </tbody>
</table>

### 解析数据文件(Python)
```python
import re
from BeautifulSoup import BeautifulSoup as bs

fname='/tmp/dictionary.data' ## Point to actual file path
with open(fname) as f:
  for line in f:
    soup = bs(line)
    spans = soup.findAll("span",{"class":"oa_chn"})
    
    word = soup.find(text=True, recursive=False) ## word entry
    #print('- entry: "%s"' % (word.strip())) ## yaml style 1
    #print('  sentences:') ## yaml style 1
    print('"%s":' % (word.strip())) ## yaml style 2
    for span in spans:
      en = span.parent
      try:
        if en['class'] == 'oa_x':
          chns = en.findAll('span', {'class':'oa_chn'})
          for chn in chns:
            chn.decompose() ## remove Chinese translation
          sentence = en.getText(separator=u' ') ## sentences
          sentence = re.sub(r"\(.*\)", "", sentence)
          sentence = re.sub(r"  ", " ", sentence)
          #print('    - "%s"' % (sentence)) ## yaml style 1
          print('  - "%s"' % (sentence)) ## yaml style 2
      except Exception as e:
        #print('found error:eh-oh')
        #print(e)
        pass
```

### 生成yaml格式数据文件(Bash)

```bash
python test.py > /tmp/words.yaml &
tail -f /tmp/words.yaml
```

### 单词数据js文件(Liquid/Jekyll)
```{% raw %}liquid
---
---
const words = {{ site.data.words | jsonify }}
{% endraw %}```

基于yaml格式数据文件生成的[单词例句JS文件](/assets/js/words.js)

---

## TODO

