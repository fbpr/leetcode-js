/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }

  return nums.length;

  // let count = 0;
  // for(let i = 0; i < nums.length; i++) {
  //   if(nums[i] !== val) {
  //     nums[count++] = nums[i];
  //   }
  // }

  // return count;
};