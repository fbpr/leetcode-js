/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    let temp = [], f = rowsCount - 1, o = true;
    if (rowsCount * colsCount !== this.length) return [];
    for(let i = 0; i < this.length; i++) {
        if (i < rowsCount) {
            temp.push([this[i]]);
        } else {
            if (o) {
                if (f === 0) o = !o;
                temp[f--][Math.floor(i / rowsCount)] = this[i]; 
            } else {
                if (f === rowsCount - 2) o = !o;
                temp[++f][Math.floor(i / rowsCount)] = this[i]; 
            } 
        }
    }
    return temp;
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */