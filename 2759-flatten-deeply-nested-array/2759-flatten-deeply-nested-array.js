/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    return n !== 0 ? arr.reduce((res, curr) => (Array.isArray(curr) ? res.push(...flat(curr, n - 1)) : res.push(curr), res), []) : arr  
};