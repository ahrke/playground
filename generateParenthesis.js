var generateParenthesis = function(n) {
  let arr = [];
  generate(n, n, arr, '');

  return arr
};

const generate = (left, right, arr, str) => {
  if (right < left) return;

  if (right === 0 && left === 0) {
    arr.push(str)
    return;
  }

  if (left) {
    generate(left - 1, right, arr, str + '(');
  }

  if (right) {
    generate(left, right - 1, arr, str + ')');
  }
}

console.log(generateParenthesis(3))
console.log(generateParenthesis(5))
