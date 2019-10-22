
const isValid = (s) => {
  let bs = s.split('');
  const pairs = {
    '}': '{',
    ']': '[',
    ')': '('
  }

  if (pairs[bs[0]]) return false

  let i = 0

  while (i < bs.length && bs.length > 0) {
    if (pairs[bs[i]] && bs[i - 1] === pairs[bs[i]]) {
      bs.splice(i-1, 2)
      i-=2
    }
    i++
  }

  return (bs.length === 0) ? true : false
}

console.log(isValid("()"))
console.log(isValid("(){}[]"))
console.log(isValid("(]"))
console.log(isValid("([)]")) // Should fail
console.log(isValid("{[]}")) // should pass
console.log(isValid("[(({})}]")) // Should fail