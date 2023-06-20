/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  return arr.reduce((prev, curr, i) => fn(curr, i) ? [...prev, curr] : [...prev], []);
}