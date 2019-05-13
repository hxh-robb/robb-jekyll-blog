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

    * 归并排序: not-in-place, O(n*lg n)
      ```js
      function merge(array, p, q, r){
        let left = [], right = [];
        for(let i=p; i<q+1; i++){
          left[i-p] = array[i];
        }
        for(let i=q+1; i<r+1; i++){
          right[i-q-1] = array[i];
        }
        
        for(i=p,j=0,k=0; ;i++){
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
          // q=Math.floor((p+r)/2); // hoisting issue
          let q=Math.floor((p+r)/2);
          merge_sort(array, p, q);
          merge_sort(array, (q+1), r);
          merge(array,p,q,r);
        }
      }
      ```
      
    * 归并插入排序
      ```js
      // TODO
      ```
      
---
## 总结

### 第一章

学习算法分三个层次, 三个层次之间彼此交叉相融

第一个层次是要理解透彻已经发明的常用算法及数据结构的运作过程, 标准库或SDK中的实现是很好的学习材料(例如Java的HashMap), 达到这一层次, 应该可以满足常规开发的绝大部分要求(遇到常见的问题可以本能反应知道手头上有哪些现成的适用工具)

第二个层次是学习分析算法, 知道如何去评价一个算法的优及适用场景, 这个层次我觉得需要更严肃的态度, 从数学逻辑的角度出发去证明算法的有效性及效率, 从中发现算法可以改进的空间;

第三个层次是改进或者设计新算法, 这是最具有挑战性, 也是区分常规级别和专家级别的分水岭;

站在解决问题的角度看, 算法是一个有用的工具, 但从开发人员的专业素质看, 对算法的熟练程度会直接反应到看待问题的态度, 遇到问题是简单的使用copy-paste, 抑或是多少会思考一下问题内在的本质;

---
## 资源

* [算法笔记(国立台湾师范大学)](http://www.csie.ntnu.edu.tw/~u91029/)
* [Selection Sort Vs Insertion Sort](https://cheetahonfire.blogspot.com/2009/05/selection-sort-vs-insertion-sort.html)