var merge = function (left,right) {
    var tempArr = []; 
    var iLeft,iRight = 0;
  // while the tempory arr is not fully populated
   while(tempArr.length < (left.length + right.length)) {
       //if all elements in the left are already added, then simply add the elements on the right
       if(iLeft=== left.length) result = result.concat(right.slice(iRight)); 
       // if all elements on the left are added, than add all elements to the left 
       else if(iRight === right.length) result.concat(left.slice(iLeft));
       //compare the elements in the subarrays and add lower of the two as a result; 
        else if(left[ileft] <= right[iRight]) result.push(left[iLeft]); 
        else result.push(right[iRight]); 
        }
        return result;
}

var mergeSortRecursive (arr) {
    if(arr.length <=1) {
        return array;
    }

    //d and q 
    var lh = arr.slice(0,array.length/2); 
    var rh = arr.slice(array.length/2); 
    var ls = mergeSortRecursive(lh);
    var rs = mergeSortRecursive(rh);

    return merge(ls,rs);
}