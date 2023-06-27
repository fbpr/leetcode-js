/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function(context, ...args) {
    Object.defineProperty(context, 'fn', {
        value: this,
        enumerable: false,
    })

    const result = context.fn(...args);
    
    delete context.fn;

    return result;
}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */