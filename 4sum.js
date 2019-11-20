
const fourSum = function(nums, target) {
  if (nums.length < 4) return [];
  let results = [];
  nums = nums.sort((a,b) => a - b);
  for (let i = 0; i < nums.length - 3; i++) {
    threeSum(nums.slice(i + 1), target - nums[i], nums[i], results)
  }

  resultsStr = results.map(result => result.join())
  resultsStr = [...new Set(resultsStr)]
  results = resultsStr.map(result => result.split(',').map(num => Number(num))) 


  return results;
};

const threeSum = (nums, target, result, results) => {
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      let s = nums[i] + nums[l] + nums[r];
      if (s === target) {
        results.push([result, nums[i], nums[l], nums[r]])
        l++;
        r--;
        while (l < r && (nums[l-1] === nums[l])) {
          l++;
        }
        while (r > l && (nums[r+1] === nums[r])) {
          r--;
        }
      } else if (s < target) {
        l++;
      } else {
        r--;
      }
    }
  }
}

// console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
// console.log(fourSum([-3,-2,-1,0,0,1,2,3], 0))
console.log(fourSum([1,-2,-5,-4,-3,3,3,5], -11))
// console.log(threeSum([1, 0, -1, 0, -2, 2], 0, []))