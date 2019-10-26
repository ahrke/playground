
var intToRoman = function(num) {
  const romans = {
    ones: ['I','V','X'],
    tenths: ['X','L','C'],
    hundreths: ['C','D','M'],
    thousandths: ['M']
  }

  const thousandth = Math.floor(num / 1000);
  const hundreth = Math.floor(num % 1000 / 100);
  const tenth = Math.floor(num % 1000 % 100 / 10);
  const ones = Math.floor(num % 10);
  
  let roman = '';

  const getRoman = (base, num) => {
    return num < 5 
    ? num < 4 
      ? romans[base+'s'][0].repeat(num) : romans[base+'s'][0] + romans[base+'s'][1]
    : num > 5 
      ? num < 9 
        ? romans[base+'s'][1] + romans[base+'s'][0].repeat(num - 5) : romans[base+'s'][0] + romans[base+'s'][2] 
      : romans[base+'s'][1]
  }

  // thousandth
  roman += romans.thousandths[0].repeat(thousandth)

  // hundredth
  roman += getRoman('hundreth', hundreth)

  // tenths
  roman += getRoman('tenth', tenth)

  // ones
  roman += getRoman('one', ones)

  return roman
};

console.log(intToRoman(3)) // III
console.log(intToRoman(4)) // IV
console.log(intToRoman(58)) // LVIII
console.log(intToRoman(1994)) // MCMXCIV


// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// 384
// 384 / 1000 = 0 // ' '
// 384 % 1000 / 100 = 3 // 'CCC'
// 384 % 1000 % 100 / 10 = 8 // 'LXXX'
// 384 % 1000 % 100 % 10 = 4 // 'IV'