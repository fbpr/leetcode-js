// Array of Object ver. instead of Map()
var TimeLimitedCache = function() {
    this.cache = [];
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    if (!this.cache.some(obj => obj.hasOwnProperty(key))) {   
        const ref = setTimeout(() => this.cache.splice(this.cache.findIndex(obj => obj[key]), 1), duration);
        this.cache.push({ 
            [key]: value,
            ref: ref
        });

        return false;
    }
    const curIndex = this.cache.findIndex(obj => obj[key]);
    clearTimeout(this.cache[curIndex].ref);
    const ref = setTimeout(() => this.cache.splice(curIndex, 1), duration);
    this.cache[curIndex] = {
        [key] : value,
        ref: ref
    }

    return true;    
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const v = this.cache.find((_, i, arr) => arr[i].hasOwnProperty(key))?.[key];
    return v ? v : -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cache.length;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */