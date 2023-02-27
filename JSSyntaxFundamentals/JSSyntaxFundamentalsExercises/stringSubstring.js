function stringSubstring(word, text){
    let wordLower = word.toLowerCase()
    let textLower = text.toLowerCase()
    if(textLower.includes(wordLower)){
        console.log(word)
    }
    else{
        console.log(`${word} not found!`)
    }

