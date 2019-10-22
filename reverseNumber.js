var reverse = function(x) {
  let revStr = x.toString().split("").reverse().join("")
  if (x < 0) {
    revStr = '-' + revStr.slice(0, revStr.length - 1)
  } 
  return (Number(revStr) > 2147483647 || Number(revStr) < -2147483648) 
    ? 0
    : Number(revStr)
};

console.log(reverse(1234))
console.log(reverse(-763))