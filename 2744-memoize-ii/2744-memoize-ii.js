/**
 * @param {Function} fn
 */
function memoize(fn) {
  const m = new Map();
  return function() {
    let root = m;
    for (let i = 0; i < arguments.length; i++) {
      if (!root.has(arguments[i])) {
        root.set(arguments[i], new Map());
      }
      root = root.get(arguments[i]);
    }

    if (!root.has('result')) {
      root.set('result', fn(...arguments));
    }

    return root.get('result');
  };
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