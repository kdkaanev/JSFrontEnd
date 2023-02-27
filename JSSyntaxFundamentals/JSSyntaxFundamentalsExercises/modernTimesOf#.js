function modernTimesOfHashTag(string){
    let text = string.split(" ")
    let list = []
    let word = ''
    let x = 0
    for (const element of text) {
        if(element.startsWith('#')){
            x = element.length
            word = element.substring(1, 1 + x)
            if(word.length > 0){
                console.log(word)
            }
        }
    }
    
}
