const jazzfizzbuzz2 = (num) => {
  let str = ''

  for (let i = 1; i <= num; i++) {
    if (i !== num && str !== '') {
      str += ','
    }

    if (str) console.log(str);

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

  }

  return 'done'
}

console.log(jazzfizzbuzz2(11));