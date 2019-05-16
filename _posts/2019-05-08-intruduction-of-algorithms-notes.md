---
title: 算法导论笔记
author: robb
date: 2019-05-08 14:14 +0800
ongoing: true
---
无论从面试这种短期目标, 还是从切实提高自己水平的长期愿望, 都应该阅读算法导论这本书, 希望自己可以从数学层面就开始深刻理解这本书, 1000多页的长期战;

2019-05-16:在跳读完前三章的内容后(完全没看习题部分), 觉得自己的数学程度尚未可以完全理解这本书, 后面还要恶补数学基础; 目前不解或觉得晦涩的内容, 还是先以似懂非懂的态度读至第五部分, 第二次再以数学严谨的态度仔细研读并解答课后习题;

---

## 笔记及总结

### 第一部分:基础(Fundations)
<details>
  <summary>章节介绍</summary>
  <p>

**第1章**
介绍了算法在当今计算机系统的角色, 定义了什么是算法并列举了些例子; 我们应该视算法为一种技术, 它与硬件GUI/面向对象/网络等其他技术相辅相成, 同步发展;

**第2章**
插入排序及归并排序, 以及表述他们运行效率的标记符;

**第3章**
用数学工具给出渐进符号的准确定义;

**第4章**
探讨归并排序中的"分而治之"的方法; master method(分析递归算法运行时间的方法?)

**第5章**
概率分析(分析各种概率分布下算法的效率?)及随机算法(打散最坏情况?);

**附录A-D**
本书会用到的数学知识;

  </p>
</details>

#### 第1章:The Role of Algorithms in Computing
<details>
  <summary>学习算法的三个层次</summary>
  <p>

**第一个层次**是要理解透彻已经发明的常用算法及数据结构的运作过程, 标准库或SDK中的实现是很好的学习材料(例如Java的HashMap), 达到这一层次, 应该可以满足常规开发的绝大部分要求(遇到常见的问题可以本能反应知道手头上有哪些现成的适用工具)

**第二个层次**是学习分析算法, 知道如何去评价一个算法的优及适用场景, 这个层次我觉得需要更严肃的态度, 从数学逻辑的角度出发去证明算法的有效性及效率, 从中发现算法可以改进的空间;

**第三个层次**是改进或者设计新算法, 这是最具有挑战性, 也是区分常规级别和专家级别的分水岭;

站在解决问题的角度看, 算法是一个有用的工具, 但从开发人员的专业素质看, 对算法的熟练程度会直接反应到看待问题的态度, 遇到问题是简单的使用copy-paste, 抑或是多少会思考一下问题内在的本质;

三个层次之间并非各自独立, 彼此**交叉相融**;

  </p>
</details>

#### 第2章:Getting Started
<details>
  <summary>插入排序</summary>

```js
//in-place, O(n)
function insertion_sort(array){
  for(i=1; i<array.length; i++){
    k = array[i];
    for(j=i-1; j>=0, array[j]>k; j--){
      array[j+1] = array[j];
    }
    array[j+1] = k;
  }
}
```
</details>

<details>
  <summary>归并排序</summary>

```js
// not-in-place, O(n*lg n)
function merge(array, p, q, r){
  let left = [], right = [];
  for(let i=p; i<q+1; i++){
    left[i-p] = array[i];
  }
  for(let i=q+1; i<r+1; i++){
    right[i-q-1] = array[i];
  }
  
  for(let i=p, j=0, k=0; ;i++){
    if(j==left.length || left[j] > right[k]){  
      array[i] = right[k];
      k++;
    } else {
      array[i] = left[j];
      j++;
    }
    
    if(j==left.length && k==right.length){
      break;
    }
  }
}

function merge_sort(array, p, r){
  if(p === undefined) p = 0;
  if(r === undefined) r = array.length-1;
  if(p < r){
  
    /*
    // bug : variable "q" had changed after calling merge_sort
    // javascript variable rule:hoisting
    q=Math.floor((p+r)/2);
    */
    let q = Math.floor((p+r)/2);
    
    merge_sort(array, p, q);
    merge_sort(array, (q+1), r);
    merge(array,p,q,r);
  }
}
```
</details>

<details>
  <summary>归并插入排序</summary>

```js
// TODO
```
</details>

<details>
  <summary>线性检索有序数组</summary>

```js
// TODO
```
</details>

<details>
  <summary>二分法检索有序数组</summary>

```js
// TODO
```
</details>

#### 第3章:Growth of Functions

TODO

#### 第4章:Divide-and-Conquer

<details>
  <summary>穷举法寻找最大子数组</summary>

```js
// TODO
```
</details>

---
## 参考资源

* [算法笔记(国立台湾师范大学)](http://www.csie.ntnu.edu.tw/~u91029/)
* [Selection Sort Vs Insertion Sort](https://cheetahonfire.blogspot.com/2009/05/selection-sort-vs-insertion-sort.html)
* [辛未羊的博客 - 数据结构](https://panqiincs.me/categories/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/)
* [Facebook工程师的阅读建议](https://www.quora.com/What-should-I-know-from-the-CLRS-3rd-edition-book-if-my-aim-is-to-get-into-Google#)
