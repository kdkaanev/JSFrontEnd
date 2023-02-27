function revealWords(words, text){
let arrWords = words.split(', ')
let newWord 
for (const word of arrWords) {
    newWord = '*'.repeat(word.length)  
    text = text.replace(newWord , word)
    
}
console.log(text)
}