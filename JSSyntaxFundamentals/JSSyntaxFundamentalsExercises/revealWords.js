function revealWords(words, text){
arrWords = words.split(' ')
let newWord 
for (const word of arrWords) {
    newWord = '*'.repeat(word.length)  
    text = text.replace(word , newWord)
    console.log(text)
}
}
revealWords('great',
'softuni is ***** place for learning new programming languages'
)
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
)