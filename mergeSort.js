const mergeSort = (arr) => {
  if (arr.length < 2) return arr

  let mid = Math.floor((arr.length) / 2)
  let left = arr.slice(0,mid)
  let right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
} 

const merge = (left, right) => {
  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }

  return [...arr, ...left, ...right]
}

console.log(mergeSort([8,2,4,22,89,1,31,5,1098, 12, 18, 13]))