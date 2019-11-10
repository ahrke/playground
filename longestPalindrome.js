const longestPalindrome = function(s) {
  if (s === '') return '';

  let longestPal = '';

  // for (let i = 1; i < s.length - 1; i++) {
  //   let j = i + 1;
  //   let k = i - 1;
  //   let a = s[k];
  //   let b = s[j];
  //   while (a === b) {
  //     j++;
  //     k--;
  //     a = s[k];
  //     b = s[j];
  //   }
  //   if (j - k - 1 > longestPal.length) {
  //     longestPal = s.split('').slice((k+1),j).join('')
  //   }
  // }

  for (let i = 0; i < s.length; ++i) {
    let end = s.length - 1;

    while (end > i) {
      if (s[i] === s[end]) {
        let temp = s.slice(i,end + 1);
        if (isPalindrome(temp)) {
          longestPal = temp.length > longestPal.length ? temp : longestPal
        }
        if (longestPal.length >= s.length/2) break;
        --end;
        continue;
      }
      --end;
    }
  }

  return longestPal.length > 1 ? longestPal : s[0]
};

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
