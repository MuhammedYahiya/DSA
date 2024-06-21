const arr = [1, 2, 3, 4, 5, 6];

let normalReverse = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
};

//Array Reverse Using inbuilt function
let arrayReverseUsingInbuiltFunc = (arr, len) => {
  let reverseArray = arr.slice().reverse();
  return reverseArray;
};
