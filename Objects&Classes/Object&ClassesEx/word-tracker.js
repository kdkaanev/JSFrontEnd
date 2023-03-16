function wordTracker(input){
    let words = {}
    let targetWords = input.shift().split(' ')
    for (const word of targetWords) {
        let count = input.filter((w) => w === word).length
        words[word] = count
        
    }
    let sortedWords = Object.entries(words)
        .sort((word1, word2) => {
        let [_name1, count1] = word1
        let [_name2, count2] = word2

        return count2 - count1
    })
    for (const [word, count] of sortedWords) {
        console.log(`${word} - ${count}`)
    }
    
   
}   
wordTracker('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
