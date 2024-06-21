//Sort an array of 0s, 1s and 2s | Dutch National Flag problem
let arr = [0, 1, 2, 0, 1, 2];

//Naive Approach  timeComplexity = O(n^2)
let naiveApproach = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

//Better Approach ==> timeComplexity = O(n)
let betterApproach = (arr) => {
  let c0 = 0;
  let c1 = 0;
  let c2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      c0 += 1;
    } else if (arr[i] === 1) {
      c1 += 1;
    } else if (arr[i] === 2) {
      c2 += 1;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (c0 > 0) {
      arr[i] = 0;
      c0--;
    } else if (c1 > 0) {
      arr[i] = 1;
      c1--;
    } else if (c2 > 0) {
      arr[i] = 2;
      c2--;
    }
  }
  return arr;
};

//Dutch National Flag algorithm ==> timeComplexity O(n) this is better method sort in single phase
let setColor = (arr) => {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      mid++;
      low++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr
};


