function capitalWord(str) {
  let words = str.split(" "); 
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 0) {
      let capitalized = word[0].toUpperCase() + word.slice(1);
      result.push(capitalized);
    } else {
      result.push(word); 
    }
  }

  return result.join(" ");
}


console.log(capitalWord("hello world"));     
