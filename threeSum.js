
var threeSum = function(nums) {
  let arr = [];
  nums = nums.sort((a,b) => a - b);
  console.log(nums)

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i-1]) continue;
    let f = i + 1
    let l = nums.length - 1
    if (nums[i] > 0) break
    while (f < l) {
      let s = nums[i] + nums[f] + nums[l]
      // console.log(nums[i], "+", nums[f], "+", nums[l])
      if (s > 0) {
        l--
      } else if (s < 0) {
        f++
      } else {
        arr.push([nums[i], nums[f], nums[l]].sort())
        while (f < l && nums[f] === nums[f + 1]) {
          f++
        }
        while (f > l && nums[l] === nums[l - 1]) {
          l--
        }
        f++
        l--
      }
    }
  }

  return arr;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])) // [ [-1, 0, 1], [-1, -1, 2] ]
console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6])) // [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]]

