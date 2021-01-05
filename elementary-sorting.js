// bubble selection and insertion sort

var swap = function (arr,var1,var2) {
    var temp = arr[var1]; 
    arr[var1] = arr[var2]; 
    arr[var2] = temp;
    return arr;
   
}

function defaultComparator(a,b) {
  if (a < b) return -1; // a comes first
  else if (a > b) return 1; // b comes first
  return 0;
};



var bubbleSort = function (arr) {

    for (var i = 0; i< arr.length;i++ ){ 
        for (var j = 0; j <arr.length -1; j++) {
            if(!arr[i]) {
                console.log("The array is empty or dne")
            }
            else if(arr[j] > arr [j+1] ){
                console.log(arr)
                swap(arr,j,j+1)
                console.log(arr)
            }
        }
    }
    return arr;

}

// var exampleArr = [1,3,4,1,4,1,1,2]; 

// console.log(bubbleSort(exampleArr));


var selectionSort = function (arr,comparator) {
    comparator = comparator || defaultComparator; // sets function to the comparator, not very necessary tbh
    arr.forEach(function (element,index) { // gonna traverse through each element in the array, so after the first iteration, the minimum value will be the first element
        var minVal = element; 
        var minIndex = index; 
        for(var i = index; i < arr.length; i++) {
            if(comparator(arr[i],minVal) < 0) { // if the current element is less than the minimum value, than set the new minimum value and index
                minVal = arr[i]; 
                minIndex = i;
            }
        }
        array = swap(arr,index,minIndex);
        
    })
    return arr;
}


var insertionSort = function (arr,comparator) { // passes array and comparator
    comparator = comparator || defaultComparator; // defaults it to a comparator
    
    for (var i = 1; i < arr.length; i++) { 
        var value = arr[i]; // sets as current val
        var compareIndex = i -1; // val to compare with 
        while (compareIndex >-1 && defaultComparator(arr[compareIndex],value) > -1 ){  // while there is an element left of current arr[i] & 
           arr =  swap(arr,i,compareIndex);
           i = compareIndex;
           compareIndex--;
        }
    }
    return arr;
    
}