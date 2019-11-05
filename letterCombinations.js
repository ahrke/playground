
const generate = (str, arr, out) => {
  if (arr.length === 1) {
    arr[0].forEach(c => {
      out.push(str + c)
    })
    return;
  }

  arr[0].forEach(c => {
    generate(str + c, arr.slice(1), out)
  })

  return;
}

var letterCombinations = function(digits) {
  if (digits === '') return []

  const nums = digits.split('');
  const keys = {
    "2": ["a","b","c"],
    "3": ["d","e","f"],
    "4": ["g","h","i"],
    "5": ["j","k","l"],
    "6": ["m","n","o"],
    "7": ["p","q","r","s"],
    "8": ["t","u","v"],
    "9": ["w","x","y","z"]
  }

  let d = nums.map(num => keys[num]);
  let arr = [];
  generate('',d, arr)

  return arr;
};

console.log(letterCombinations("23")) // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

