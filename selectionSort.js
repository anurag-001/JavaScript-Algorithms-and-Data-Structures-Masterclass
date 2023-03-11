function selectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var min = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(i !== min){
            
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}
 console.log(selectionSort([3,2,34,22,14,19,17]))