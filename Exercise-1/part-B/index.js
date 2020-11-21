/**
 * The sentence "A quick brown fox jumps over the lazy dog" contains every single
letter in the alphabet. Such sentences are called pangrams.
You are to write a method ‘GetMissingLetters’ using a language of your choice,
which takes a String, a sentence, and returns all the letters it is missing (which
prevent it from being a pangram).
You should ignore the case of the letters in sentence, and your return should be all
lower case letters, in alphabetical order.
You should also ignore all non US-ASCII characters.
 */


const getMissingLetters = (sentence) => {
  let alphabets = {a:'a',b:'b',c:'c',d:'d',e:'e',f:'f',g:'g',h:'h',i:'i',j:'j',k:'k',l:'l',m:'m',n:'n',o:'o',p:'p',q:'q',r:'r',s:'s',t:'t',u:'u',v:'v',w:'w',x:'x',y:'y',z:'z'};

  // convert string to lowercase.
  const lowerSentence = sentence.toLowerCase();

  // loop through the array and check if the alphabets object contains the character. if the character is present remove it from the object.
  for(let i=0; i<lowerSentence.length; i++) {
    const character = lowerSentence[i];
    if(alphabets[character]) {
      delete alphabets[character];
    }
  }
   
  console.log('res', Object.values(alphabets).sort());
  return Object.values(alphabets).sort();
}

getMissingLetters('A quick brown $ % () fox jumps over the lazy dog');
getMissingLetters('A quick brown fox  over the lazy dog');
getMissingLetters('A quick brown fox jumps  the lazy dog');
getMissingLetters(' quck bron fox jumps oer the lzy dg');
getMissingLetters('aaaaaaaaa eeeeegaage ddddddddddddddddddddd');
