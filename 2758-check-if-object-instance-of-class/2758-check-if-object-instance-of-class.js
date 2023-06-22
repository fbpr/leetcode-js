/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    return obj === null || obj === undefined || typeof classFunction !== 'function' ? false : Object(obj) instanceof classFunction;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */