function minMax(arr){
    min = arr[0];
    max = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i] < min){
            min = arr[i]
        }
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return {min,max}
}

let array = [5,6,100,10,4]
res = minMax(array)
console.log("Minimum element is: " +res.min+" Maximum element is: "+res.max)