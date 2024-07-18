const arr = [1, 2, 3, 4, 5, 6];
const start = 0
const end = arr.length-1

let normalReverse = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
};

let usingWhileLoop = (arr,start,end) =>{
  while(start < end){
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    end--
    start++
  }
}

let printArray = (arr) =>{
  for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
  }
}

//Array Reverse Using inbuilt function
let arrayReverseUsingInbuiltFunc = (arr, len) => {
  let reverseArray = arr.slice().reverse();
  return reverseArray;
};

