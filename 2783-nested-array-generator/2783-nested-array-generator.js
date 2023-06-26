// You can use .flat(Infinity) instead
/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
    const f = arr.reverse();
    while(f.length > 0) {
        const curr = f.pop();
        if (!Array.isArray(curr)) {
            yield curr;
        } else {
            f.push(...curr.reverse());
        }
    }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */