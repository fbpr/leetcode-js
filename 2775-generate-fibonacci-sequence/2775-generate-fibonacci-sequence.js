/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let i = 0, y = 1, x = 0;
    yield i;
    yield y;
    while (true) {
        x = y + i;
        yield x;
        i = y;
        y = x;
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */