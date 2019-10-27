const binarySearch = (arr, x) => {
  let mid;
  let a = arr.sort((a,b) => a - b)

  while (a.length > 1) {
    mid = Math.floor(a.length / 2);
    if (a[mid] === x) {
      return true
    } else {
      a[mid] > x 
        ? a = a.splice(0, mid)
        : a = a.splice(mid)
    }
  }

  return false
}

const recBinarySearch = (arr, x) => {
  let mid = Math.floor(arr.length / 2)
  if (arr.length === 1 && arr != x) return false
  if (arr[mid] === x) return true
  return (arr[mid] > x) 
    ? recBinarySearch(arr.splice(0, mid), x)
    : recBinarySearch(arr.splice(mid), x)
}


console.log(recBinarySearch([1,3,7,12,23,55,64,80,1045], 55))
console.log(binarySearch([1,80,55,23,12,7,1045,3], 3))
console.log(binarySearch([1,80,55,23,12,7,1045,3, 64], 54))