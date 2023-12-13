/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let punch= /[\.,?!]/g;
  let originalStr = str.replace(punch,"").split(" ").join("").toLocaleLowerCase();
  let reverseStr = originalStr.split("").reverse().join("");

  console.log(originalStr,reverseStr);
  return originalStr === reverseStr
 
}

module.exports = isPalindrome;
