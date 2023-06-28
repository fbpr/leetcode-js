/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function (obj) {
  return Array.isArray(obj)
    ? Object.entries(obj)
        .filter(([_, v]) => Boolean(v))
        .map(([_, v]) => v === Object(v) ? compactObject(v) : v)
    : Object.fromEntries(
        Object.entries(obj)
          .filter(([_, v]) => v)
          .map(([k, v]) => [k, v === Object(v) ? compactObject(v) : v])
      );
};
