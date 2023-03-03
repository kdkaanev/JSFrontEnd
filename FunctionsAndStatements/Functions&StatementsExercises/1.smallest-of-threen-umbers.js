function smallestOfThreeNumbers(...numbers){
    let minNum = Number.MAX_VALUE
    for (const num of numbers) {
        if (num < minNum){
            minNum = num
        }
    }
    return minNum

}