var myAtoi = function(str) {
  if (str.length === 0 || str.trim().length === 0 || str.trim()[0].search((/[0-9-+]+/)) < 0 || (str.trim().length === 1 && str.trim()[0] === '-')) return 0;
  if (str.includes('-') && str.includes('+')) return 0;
  const MAX_INT = Math.pow(2, 31) - 1;
  const MIN_INT = Math.pow(-2, 31);

  // str = str.replace(/([^0-9-.])+/, '');
  // str = str.trim().split(/([^0-9-+.])+/)[0]
  str = str.match(/([-+]?[0-9.]+)/g)

  if (Number(str) > MAX_INT) return MAX_INT;
  if (Number(str) < MIN_INT) return MIN_INT;

  return Number(Math.floor(str));
};

console.log(myAtoi("42"))
console.log(myAtoi("   -42"))
console.log(myAtoi("words are 923"))
console.log(myAtoi("923 my words"))
console.log(myAtoi("-91283472332"))
console.log(myAtoi("3.14159"))
console.log(myAtoi("+-2"))
console.log(myAtoi("  -0012a42"))
console.log(myAtoi("+1"))
console.log(myAtoi("-5-"))