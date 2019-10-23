import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from "constants";

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

// alternate solution 
// var map = {
//   "(": ")",
//   "[": "]",
//   "{": "}"
// } 

// var isValid = function(s) {
//   var stack = [];
  
//   for (var i = 0; i < s.length; i++) {
//       var el = s[i];
      
//       if (map[el]) {
//           stack.push(map[el]);
//       } else {
//           if (el !== stack.pop()) {
//               return false;
//           }
//       }
//   }
  
//   return stack.length === 0;
// };

console.log(isValid("()"))
console.log(isValid("(){}[]"))
console.log(isValid("(]"))
console.log(isValid("([)]")) // Should fail
console.log(isValid("{[]}")) // should pass
console.log(isValid("[(({})}]")) // Should fail