var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';

  let longestPrefix = '';
  let length = strs.length;
  
  const allPrefixes = [];
  let str = strs[0];
  for (let i = 1; i < str.length + 1; i++) {
    allPrefixes.push(str.slice(0,i))
  }

  allPrefixes.forEach(pr => {
    if (strs.filter(str => str.slice(0,pr.length) === pr).length === length) {
      longestPrefix = longestPrefix.length > pr.length
        ? longestPrefix
        : pr
    }
  })

  return longestPrefix;
};

/*  More Efficient

var longestCommonPrefix = function(strs) {
    let longestPrefix = ""
    if (!strs.length) {
        return longestPrefix
    }
    for (let j = 0; j < strs[0].length; j++) {
        let seed = strs[0][j]
        for (let i = 1; i < strs.length; i++) {
            if (strs[i][j] !== seed) {
                return longestPrefix;
            }
        }
        longestPrefix += seed
    }
    return longestPrefix;
};

*/

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["c","c"]))