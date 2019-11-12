const jazzfizzbuzz2 = (num) => {
  let str = '';
  let maxNum = 0;

  if (num % 5 === 0 || num % 3 === 0 || num % 2 === 0) {
    maxNum = num;
  } else {
    let remainder = Math.min(num%5,num%3,num%2)
    maxNum = num - remainder;
  }
  
  for (let i = 1; i <= maxNum; i++) {
    
    str = '';
    
    if (i % 2 === 0) {
      str += 'jazz';
    } 
    if (i % 3 === 0 ) {
      str += 'fizz';
    }
    if (i % 5 === 0) {
      str += 'buzz';
    }
    
    if (str !== '' && i !== maxNum ) {
      str += ','
    }
  
    if (str) console.log(str);
  }
  
  return 'done'
}

console.log(jazzfizzbuzz2(11));