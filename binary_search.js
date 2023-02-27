function linearSearch(arr, num) {
    var low = 0;
    var high = arr.length - 1;
  
      while(low <= high){
          var mid = Math.floor((low + high)/2);
          if(num === arr[mid]){
              return mid;
          }else if(num > arr[mid]){
              low = mid + 1;
          }else{
              high = mid - 1;
          }
      }
  
  return -1;
}

console.log(linearSearch([1, 2, 3, 14, 25, 55], 25));