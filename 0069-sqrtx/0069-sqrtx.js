/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // if (x === 0 || x === 1) {
    //     return x;
    // }

    // let i = 1, res = 1;
    // while (res <= x) {
    //     i++;
    //     res = i * i;
    // }

    // return i - 1;

    let y = x;
    while (y * y > x) {
        y = Math.floor((y + x / y) / 2)
    }

    return y;
};