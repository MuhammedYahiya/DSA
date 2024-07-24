function intersection(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let inter = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr1[i]) {
      j++;
    } else {
      inter.push(arr1[i]);
      i++;
      j++;
    }
  }
 
  return inter;
}

let arr1 = [1,2,3,4,5,9];
let arr2 = [1,2,3,4,5,6,7,8,9];
console.log(intersection(arr1, arr2));
