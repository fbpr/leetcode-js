/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.toLowerCase().replace(/[^0-9a-z]/g, "");
    let l = 0, r = str.length - 1;
    
    while(l < r){
        if(str[l] !== str[r]) {
            return false;
        }
        l++;
        r--;
    }

    return true;
};