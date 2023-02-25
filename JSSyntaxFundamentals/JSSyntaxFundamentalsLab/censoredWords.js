function solve(text, word){
    while(text.includes(word)){
        newText = text.replace(word, "*".repeat(word.lenght))
    }
    console.log(newText)
}
