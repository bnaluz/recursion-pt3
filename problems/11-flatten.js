/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr, finArr = []) {
  if (!arr.length) return arr;

  for (let el of arr) {
    if (el instanceof Array) {
      finArr.push(...flatten(el));
    } else {
      finArr.push(el);
    }
  }
  return finArr;
}

console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([])); // []

/*
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];

    //recursive case //recursive step
    if (Array.isArray(el)) {
      newArray.push(...flatten(el));
    } else {
      newArray.push(el);
    }
  }
  return newArray;
*/
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
