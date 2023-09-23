/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

function isSorted(arr) {
  if (arr[0] > arr[1]) {
    return false;
  }
  if (arr.length === 1) {
    return true;
  }
  if (arr[0] < arr[1]) {
    arr.shift();
    isSorted(arr);
  }
  return isSorted(arr);
}

console.log(isSorted([1, 2, 4, 3, 5])); // false
console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([2, 4, 6, 7, 8])); // true
console.log(isSorted([5, 4, 3, 2, 1])); // false

/*
  if (arr.length === 1) {
    return true;
  }
  if (arr[0] > arr[1]) {
    // console.log('0 less than', arr[0]);
    // console.log('1 less than ', arr[1]);
    return false;
  }
  if (arr[0] < arr[1]) {
    // console.log('0', arr[0]);
    // console.log('1', arr[1]);
    arr.shift();
    // console.log('1st');
    // console.log(arr);
    return isSorted(arr);
  }
*/

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
