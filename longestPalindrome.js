const longestPalindrome = function(s) {
  if (s === '') return '';

  let longestPal = '';

  for (let i = 1; i < s.length - 1; i++) {
    longestPal = [longestPal, helper(s,i,i), helper(s, i, i+1)].reduce((max = '', curr) => curr.length > max.length ? curr : max)
  }

  // for (let i = 0; i < s.length; ++i) {
  //   let end = s.length - 1;

  //   while (end > i) {
  //     if (s[i] === s[end]) {
  //       let temp = s.slice(i,end + 1);
  //       if (isPalindrome(temp)) {
  //         longestPal = temp.length > longestPal.length ? temp : longestPal
  //       }
  //       if (longestPal.length >= s.length/2) break;
  //       --end;
  //       continue;
  //     }
  //     --end;
  //   }
  // }

  return longestPal
};

const helper = (s, l, r) => {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    --l;
    ++r;
  }

  if (s[l + 1] === s[r - 1]) {
    return s.slice(l + 1, r)
  } else {
    return s[l + 1]
  }
    
}

const isPalindrome = (s) => {
  let start = 0;
  let end = s.length - 1

  while (end > start) {
    if (s[start] !== s[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}


console.log(isPalindrome('aba'));
console.log(isPalindrome('fasd'));

console.log(longestPalindrome('ababab'));
console.log(longestPalindrome('babad'))
console.log(longestPalindrome('dsdfabababauiyi'));
console.log(longestPalindrome('cbbd'));
