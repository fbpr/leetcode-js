/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // let needleIndex = 0;
  // for (let i = 0; i < haystack.length; i++) {
  //   if (haystack[i] === needle[needleIndex]) {
  //     if (needleIndex === needle.length - 1) {
  //         return i - needle.length + 1;
  //     }
  //     needleIndex++;
  //   } else {
  //     i -= needleIndex;
  //     needleIndex = 0;
  //   }
  // }
  // return -1;

  return haystack.indexOf(needle);
};