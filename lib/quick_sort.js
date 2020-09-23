function quickSort(array) {
  // if the length of the array is 0 or 1, return the array

  // set the pivot to the first element of the array
  // remove the first element of the array

  // put all values less than the pivot value into an array called left
  // put all values greater than the pivot value into an array called right

  // call quick sort on left and assign the return value to leftSorted
  // call quick sort on right and assign the return value to rightSorted

  // return the concatenation of leftSorted, the pivot value, and rightSorted

  if (array.length === 0 || array.length === 1) return array;

  let pivot = array[0];
  array.shift(pivot);

  let arrayLeft = [];
  let arrayRight = [];

  array.forEach((ele) => {
    if (ele < pivot) {
      arrayLeft.push(ele)
    } else {
      arrayRight.push(ele)
    }
  })

  let leftSorted = quickSort(arrayLeft);
  let rightSorted = quickSort(arrayRight);

  return [...leftSorted, pivot, ...rightSorted];
}


module.exports = {
  quickSort
};
