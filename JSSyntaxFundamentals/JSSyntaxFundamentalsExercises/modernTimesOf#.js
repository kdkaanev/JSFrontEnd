function modernTimesOfHashTag(string){
    let text = string.split(" ")
    
    let word = ''
    let x = 0
    for (const element of text) {
        if(element.startsWith('#') && testValidWord(element)){
            x = element.length
            word = element.substring(1, 1 + x)
            if(word.length > 0){
                console.log(word)
            }
        }
    }
    function testValidWord(testWord){
        let testWordLowercase =  testWord.toLowerCase().slice(1)
        for (const symbol of testWordLowercase) {
            let asciiCode = symbol.charCodeAt(0)
            if(!(asciiCode >= 97 && asciiCode <= 122)){
                return false
            }
        }
            return true
        }
    }
    

