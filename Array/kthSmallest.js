
//sort the array time complexity is O(n^2)
function kthSmallest(arr,k){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    
    return arr[k-1]
}

function usingSortMethod(arr,k){
    arr.sort((a,b)=>a-b)
    return arr[k-1]
}
let array = [7,10,4,3,20,15];
res = usingSortMethod(array,4)
