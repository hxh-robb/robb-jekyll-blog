const LEN = 100000;

let a = [];
for(i=0; i<LEN; i++){
  a[i] = Math.floor(Math.random() * LEN);
}

const UNSORTED = [...a];


/* ************************* */

function diff(t1,t2){
  return t2[0] * 1000000000 + t2[1] - t1[0] * 1000000000 - t1[1];
}

function need_swap(m,n){
  return m > n; // asc
}

function swap(array, index1, index2){
  array[index1] = array[index1] + array[index2];
  array[index2] = array[index1] - array[index2];
  array[index1] = array[index1] - array[index2];
}

function check(array){
  for(i=0; i<array.length - 1; i++){
    if(need_swap(array[i], array[i+1])){
      return false;
    }
  }
  
  backup = [...array];
  for(i=0; i<UNSORTED.length; i++){
    found = false;
    for(j=0; j<backup.length; j++){
      if(UNSORTED[i] == backup[j]){
        found = true;
        backup[j] = NaN;
        break;
      }
    }
    if(!found){
      return false
    }
  }
  
  return true;
}

/* ************************* */

function insertion_sort(array){
  for(i=1; i<array.length; i++){
    k = array[i];
    for(j=i-1; j>=0, array[j]>k; j--){
      array[j+1] = array[j];
    }
    array[j+1] = k;
  }
}

/* -------------- */

function familiar_sort(array){
  for(i=0; i<array.length-1; i++){
    for(j=i+1; j<array.length; j++){
      if(array[i] > array[j]){
        k = array[i];
        array[i] = array[j]
        array[j] = k;
      }
    }
  }
}

/* -------------- */

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

/* ************************* */

a = [...UNSORTED];
let s = 
//  insertion_sort;
  merge_sort;
console.log(s);
// console.log(a.join(','));
console.log('--- sorting:' + LEN + ' ---');
let t1 = process.hrtime();
s(a);
// s(a, 0, a.length / 2, a.length-1);
let t2 = process.hrtime();
console.log('--- sorted:' + diff(t1,t2) + ' ---');
// console.log('correctness:' + check(a));
// console.log(a.join(','));

/*

console.log(a.join(','));
console.log('--- sorting ---');
let size = 1;
let ut1 = 0;
let ut2 = 0;
for(c=0; c<size; c++){
  let s1 = insertion_sort;
  let s2 = familiar_sort;
  a = [...UNSORTED];
  b = [...UNSORTED];
  
  let t1 = process.hrtime();
  s2(b);
  let t2 = process.hrtime();
  s1(a);
  let t3 = process.hrtime();
  
  ut1 += diff(t1,t2)
  ut2 += diff(t2,t3)
}
console.log('--- a sorted:' + (ut2 / size));
console.log('--- b sorted:' + (ut1 / size));
console.log(a.join(','));
console.log(b.join(','));

*/
