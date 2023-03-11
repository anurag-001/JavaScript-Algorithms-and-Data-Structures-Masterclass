function insertionSort(arr){
    for(var i=1; i<arr.length; i++){
        var temp = arr[i];
        var j = i-1;
        while(j>=0 && arr[j]>temp){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    return arr;
}
console.log(insertionSort([85,41,2,86,4,87,23]));