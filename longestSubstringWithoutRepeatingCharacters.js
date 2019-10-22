var lengthOfLongestSubstring = function(s) {
  let collection = [];
  for (let i = 0; i < s.length - 1; i++) {
      let str = '';
      for (let j = i; j < s.length; j++) {
          if (str.includes(s[j])) break;
          if (!str.includes(s[j])) str += s[j]
      }
      collection.push(str)
  }
  
  return collection.sort((a,b) => {
      return a.length - b.length
  })[collection.length - 1].length
};

console.log(lengthOfLongestSubstring("abcabcbb"))