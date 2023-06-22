/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
  const tmp = {};
  for(const v of this) {
    const k = fn(v);
    if(!tmp[k]) {
      tmp[k] = []
    }
    tmp[k].push(v);
  }
  return tmp;
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */