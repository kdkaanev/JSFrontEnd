function oddOccurrences(input){
    let text = input
        .toLowerCase()
        .split(' ')
    let words = {}
    for (let word of text) {
        let count = text.filter((w) => w === word).length
        words[word]= count
    }
    let result = []
    for (const [key, value] of Object.entries(words)) {
        if(value % 2 !== 0){
            result.push(key)
        }
    }
    console.log(result.join(' '))
}

