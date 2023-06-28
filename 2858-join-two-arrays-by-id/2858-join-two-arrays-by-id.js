/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const joinedArray = arr1;
  const arr1Index = arr1.reduce((prev, curr, i) => {
    prev[curr.id] = i;
    return prev;
  }, {});

  for (const item of arr2) {
    if (arr1Index.hasOwnProperty(item.id)) {
      Object.assign(joinedArray[arr1Index[item.id]], item);
    } else {
      joinedArray.push(item);
    }
  }

  return joinedArray.sort((a, b) => a.id - b.id);
};
