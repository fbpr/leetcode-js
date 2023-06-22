/**
 * @param {Function} fn
 */
function memoize(fn) {
    const m = new Map();
    return function(...args) {
        return m.has(`${args}`) ? m.get(`${args}`) : m.set(`${args}`, fn(...args)).get(`${args}`);
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */