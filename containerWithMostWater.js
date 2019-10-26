
var maxArea = function(height) {
  // let mArea = 0;

  // for (let i = 0; i < height.length - 1; i++) {
  //   let j = i + 1;
  //   for (j; j < height.length; j++) {
  //     let area = (height[j] > height[i] ? height[i] : height[j]) * (j - i)
  //     mArea = (area > mArea ? area : mArea) 
  //   }
  // }

  // return mArea

  let [i, j] = [0, height.length - 1];
  let water = 0;

  while (i < j) {
    water = Math.max(water, ((j - i) * Math.min(height[i], height[j])));
    height[i] > height[j] ? j-- : i++;
  }

  return water
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])) // 49
