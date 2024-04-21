/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  console.log(numbers.sort(function(a, b) {
    return a - b;
  })[numbers.length-1])
    return numbers.sort(function(a, b) {
        return a - b;
      })[numbers.length-1];
}

findLargestElement([-1,2,-8,22,1,54,6,-5])

module.exports = findLargestElement;