
var threeSum = function(nums) {
  let arr = [];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let arrIn = [nums[i], nums[j], nums[k]].sort()
          let temp = arr.filter(a => {
            return a.toString() === arrIn.toString()
          })
          if (temp.length < 1) {
            arr.push(arrIn)
          }
        }
      }
    }
  }

  return arr;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])) // [ [-1, 0, 1], [-1, -1, 2] ]
