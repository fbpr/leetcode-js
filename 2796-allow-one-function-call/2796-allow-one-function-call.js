/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let flag = 1;
    return function(...args){
        return flag ? flag-- && fn(...args) : undefined; 
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
