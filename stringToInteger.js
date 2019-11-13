var myAtoi = function(str) {

  const MAX_INT = Math.pow(2, 31) - 1;
  const MIN_INT = Math.pow(-2, 31);

  let i = 0;
  while (str[i] === ' ') {
    str[i] = '';
    i++
  }

  let sign = str[i] === '-' ? -1 : 1;
  if (str[i] && str[i].match(/[-+]/)) i++
  let result = 0;

  while (str[i] && (/[0-9]/).test(str[i])) {
    result = (result * 10) + Number(str[i]);
    i++;
  }

  return Math.max(MIN_INT, Math.min(sign * result, MAX_INT)) 
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
console.log(myAtoi(" "))
console.log(myAtoi("-5-"))
console.log(myAtoi("+"))
console.log(myAtoi("1"))