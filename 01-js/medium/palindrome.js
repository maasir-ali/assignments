/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // let newStr = str.split(" ").map((char) => char.replace(/[^\w\s]/g, '')).join("").toLowerCase();
  // let reversedStr = str.split(" ").join("").toLowerCase().split("").map((char) => char.replace(/[^\w\s]/g, '')).reverse().join("");
  // return newStr == reversedStr? true: false;

  let a = str.split(" ").join("").toLowerCase().replace(/[^\w\s]/g, '').split("").join("");
  let b = str.split(" ").join("").toLowerCase().replace(/[^\w\s]/g, '').split("").reverse().join("");
  return a == b ? true: false;
}

module.exports = isPalindrome;
