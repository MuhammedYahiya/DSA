function unionArray(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let union = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      union.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      union.push(arr2[j]);
      j++;
    } else {
      union.push(arr1[i]);
      i++;
      j++;
    }
  }
  while (i < arr1.length) {
    union.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    union.push(arr2[j]);
    j++;
  }
  return union;
}

let arr1 = [7, 2, 5, 1, 3];
let arr2 = [3, 9, 2, 8, 4];
console.log(unionArray(arr1, arr2));
