/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let l = 0, r = 0, res = [];
    while (r < nums.length) {
        if (nums[r] + 1 === nums[r + 1]) {
            r++;
        }
        else {
            if (l === r) {
                res.push(`${nums[l]}`);
            }
            else {
                res.push(`${nums[l]}->${nums[r]}`);
            }
            l = ++r;
        }
    }

    return res;
};