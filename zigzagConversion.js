// given a string, and an int of rows, print out what result would be
// from string put into zigzag, and put together by row...
// IMTHENUMBERONECOFFEE, 4
//  I    U     N
//  M  N M   O E
//  T E  B R   C
//  H    E     O....
// IUNMNFOETEFEBRCFHEO

var convert = function(s, numRows) {
  if (numRows < 2 || s.length <= numRows) return s
  let i = 0 // i = current index
  let k = 0 // k = current row
  let reverse = false // bool to set when to reverse direction
  let arr = new Array(numRows).fill([])

  while (i < s.length) {
    arr[k] = [...arr[k], s[i]]
    i++
    if (!reverse) {
      if (k == numRows - 1) {
        reverse = !reverse
        k--
      } else {
        k++
      }
    } else if (reverse) {
      if (k == 0) {
        reverse = !reverse
        k++
      } else {
        k--
      }
    }
  }

  return arr.flat().join('')
};


console.log(convert('THEFUNKISNEAR', 4))
console.log(convert("PAYPALISHIRING",3))  // output should be: PAHNAPLSIIGYIR
console.log(convert("AB",1))
console.log(convert("ABCDE", 5))
