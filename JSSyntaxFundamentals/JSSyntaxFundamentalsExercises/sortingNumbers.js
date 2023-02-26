function sortingNumbers(arrNumbers){
    let list = []
    let small
    let big
    arrNumbers.sort((a, b) => a - b)
    while(arrNumbers.length > 0){
        small = arrNumbers.shift()
        list.push(small)
        big = arrNumbers.pop()
        list.push(big)
    }
    return list
}
