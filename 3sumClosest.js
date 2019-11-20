var threeSumClosest = function(nums, target) {
  if (nums.length === 0) return [];
  if (nums.length === 3) return nums[0] + nums[1] + nums[2];

  let sumOut = nums[0] + nums[1] + nums[2];

  nums = nums.sort((a,b) => a - b);
  
  for (let i = 0; i < nums.length; i++) {
    let k = i + 1;
    let l = nums.length - 1;
    while (k < l) {
      let s = nums[i] + nums[k] + nums[l];
      if (s === target) return s
      let diff = Math.abs(target - s);
      if (diff < (Math.abs(sumOut - target))) {
        sumOut = s;
      } 
      if (s > target) {
        l--;
      } else if(s < target) {
        k++;
      }
    }
  }

  return sumOut
};

console.log(threeSumClosest([-1, 2, 1, -4],1));
console.log(threeSumClosest([0, 0, 0,], 1));
console.log(threeSumClosest([1, 1, 1, 0], -100));
console.log(threeSumClosest([4,0,5,-5,3,3,0,-4,-5], -2))


// [-4,-2,-1,2,4,7], 3