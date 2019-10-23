var removeDuplicates = function(nums) {
    let keys = {}
    let i = 0;
    while (i < nums.length) {
      if (keys[nums[i]]) {
        nums.splice(i,1)
      } else {
        keys[nums[i]] = 1
        i++
      }
    }

    return nums.length
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
console.log(removeDuplicates([1,1,2]))