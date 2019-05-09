---
title: 算法导论阅读笔记
author: robb
date: 2019-05-08 14:14 +0800
---
无论从面试这种短期目标, 还是从切实提高自己水平的长期愿望, 都应该阅读算法导论这本书, 希望自己可以从数学层面就开始深刻理解这本书, 1000多页的长期战;

---

## 笔记

* 第一部分:基础(Fundations)
  * Intruduction
    * 第一章:介绍了算法在当今计算机系统的角色, 定义了什么是算法并列举了些例子; 我们应该视算法为一种技术, 它与硬件GUI/面向对象/网络等其他技术相辅相成, 同步发展;
    * 第二章:插入排序及归并排序, 以及表述他们运行效率的标记符;
    * 第三章:用数学工具给出渐进符号的准确定义;
    * 第四章:探讨归并排序中的"分而治之"的方法; master method(分析递归算法运行时间的方法?)
    * 第五章:概率分析(分析各种概率分布下算法的效率?)及随机算法(打散最坏情况?);
    * 附录A-D:本书会用到的数学知识;
  * 第二章
    * 插入排序: in-place, O(n)
      ```js
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

    * 归并排序: O(n*lg n)
      ```js
      /* TODO
      The key operation of the merge sort algorithm is the merging of two sorted
sequences in the “combine” step. We merge by calling an auxiliary procedure
MERGE(A; p; q; r), where A is an array and p, q, and r are indices into the array
such that p <= q < r. The procedure assumes that the subarrays A[p:q] and
A[q+1:r] are in sorted order. It merges them to form a single sorted subarray
that replaces the current subarray A[p:r].
      */
      ```

---
## 总结

* 第一章
  * 掌握现成算法
  * 分析算法
  * 设计算法

---
## 资源

* [算法笔记(国立台湾师范大学)](http://www.csie.ntnu.edu.tw/~u91029/)
* [Selection Sort Vs Insertion Sort](https://cheetahonfire.blogspot.com/2009/05/selection-sort-vs-insertion-sort.html)