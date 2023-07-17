/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const l = s.trim();
    return l.length - l.lastIndexOf(' ') - 1;
}