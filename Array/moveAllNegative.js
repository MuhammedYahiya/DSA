function moveAllNegative(arr, left, right) {
  while (left <= right) {
    if (arr[left] < 0 && arr[right] < 0) {
      left += 1;
    } else if (arr[left] > 0 && arr[right] < 0) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left += 1;
      right -= 1;
    } else if (arr[left] > 0 && arr[right] > 0) {
      right -= 1;
    } else {
      left += 1;
      right -= 1;
    }
  }
  return arr;
}

let arr = [4, 5, -1, -2, 4, 5, -8, -9];
let left = 0;
let right = arr.length - 1;
console.log(moveAllNegative(arr, left, right));
