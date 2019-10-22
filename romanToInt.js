var romanToInt = function(s) {
  const romans = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }

  let num = 0;
  s = s.split("")
  for (let i = 0; i < s.length; i++) {
    num += romans[s[i]]
    console.log(num)
  }
  s = s.join("")
  if (s.includes("IV")) num -= 2;
  if (s.includes("IX")) num -= 2;
  if (s.includes("XL")) num -= 20;
  if (s.includes("XC")) num -= 20;
  if (s.includes("CD")) num -= 200;
  if (s.includes("CM")) num -= 200;

  return num;
};

console.log(romanToInt("III"))
console.log(romanToInt("IV"))
console.log(romanToInt("MCMXCIV"))
console.log(romanToInt("MCDLXXVI")) //1476